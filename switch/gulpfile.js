var gulp = require('gulp');
var uglify = require('gulp-uglify');
var config = require('./config.js');//外部配置文件名为config.js
var concat = require('gulp-concat');
var rename = require('gulp-rename');

function doStuff(cfg) {
  return gulp.src(cfg.src)
    .pipe(concat(cfg.name))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(cfg.dest));
}

gulp.task('dry', function() {
  doStuff(config.desktop);
  doStuff(config.mobile);
});


////import minimist from 'minimist';
////import gutil from 'gulp-util';
//
//var gulp = require("gulp"); //导入gulp
//var gutil = require("gulp-util"); //js检查
//var minimist = require("minimist"); //js检查
//
////默认DEV环境
//var knowOptions = {
//    string: 'env',
//    default: {
//        env: process.env.NODE_ENV || 'development'
//    }
//};
//
//var options = minimist(process.argv.slice(2), knowOptions);
//
//function string_src(filename, string) {
//    var src = require('stream').Readable({
//        objectMode: true
//    })
//    src._read = function () {
//        this.push(new gutil.File({
//            cwd: "",
//            base: "",
//            path: filename,
//            contents: new Buffer(string)
//        }))
//        this.push(null)
//    }
//    return src
//}
//
//gulp.task('constants', function () {
//    var myConfig = require('./config.json');
//    var envConfig = myConfig[options.env];
//    var conConfig = 'CONFIG = ' + JSON.stringify(envConfig);
//    return string_src("config.js", conConfig)
//        .pipe(gulp.dest(''))
//});
//
//gulp.task('serve', ['constants']);