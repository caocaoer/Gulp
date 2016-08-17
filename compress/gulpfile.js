var gulp = require('gulp'),
    htmlMin = require('gulp-htmlmin'), //html压缩
    jsMin = require('gulp-uglify'), //js压缩
    cssMin = require('gulp-clean-css'), //css压缩
    notify = require('gulp-notify'), //提示信息
    concat = require('gulp-concat'), //文件合并
    rename = require('gulp-rename'); //文件重命名

gulp.task('testCssMin', function (){
    gulp.src('src/css/*.css')
        .pipe(concat('main.css'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(cssMin({
            advanced: false, //类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
            compatibility: true, //保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
            keepBreaks: false, //类型：Boolean 默认：false [是否保留换行]
            keepSpecialComments: '*' //保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
        }))
        .pipe(gulp.dest('dist/css'))
        .pipe(notify({
            message: 'css task ok'
        }));
});

gulp.task('testJsMin', function(){
    gulp.src('src/js/*.js')
        .pipe(jsMin())
        .pipe(rename({
            suffix: '.min'
        }))
//        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(notify({
            message: 'js task ok'
        }));
});

gulp.task('testHtmlMin', function(){
    gulp.src('src/*.html')
    .pipe(htmlMin({
        collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist'))
    .pipe(notify({
        message: 'html task ok'
    }));
});