"use strict";
var gulp = require("gulp"); //导入gulp
var jshint = require("gulp-jshint"); //js检查
var stylish = require('jshint-stylish'); //js检查格式化
var concat = require('gulp-concat'); //文件合并
var uglify = require('gulp-uglify'); //js压缩混淆
var del = require('del'); //删除文件
var cdn = require('gulp-cdn'); //域名切换
var config = require('./web.config').WEB_CONFIG; //项目配置文件

/* 测试环境打包 */
gulp.task("testClear",function(cb){
    del.sync(config.PATH.TEST + "/*");
    cb();
});
gulp.task("testConfig", ["testClear"], function() {
    return gulp.src(config.PATH.DEV + "/config.dev.js")
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(cdn([{
            domain: config.API.DEV,
            cdn: config.API.TEST
        }, {
            domain: config.REPORT.DEV,
            cdn: config.REPORT.TEST
        }, {
            domain: config.STYLE.DEV,
            cdn: config.STYLE.TEST
        }]))
        .pipe(concat("config.test.js"))
        .pipe(gulp.dest(config.PATH.TEST + "/"));
});
gulp.task("testHtml", ["testConfig"], function() {
    return gulp.src(config.PATH.DEV + "/*.html")
        .pipe(cdn([{
            domain: config.STYLE.DEV,
            cdn: config.STYLE.TEST
        }, {
            domain: "config.dev.js",
            cdn: "config.test.js"
        }]))
        .pipe(gulp.dest(config.PATH.TEST + "/"));
});
gulp.task("testJS", ["testHtml"], function() {
    return gulp.src(config.PATH.DEV + "/js/*.js")
        .pipe(jshint())
        .pipe(cdn([{
            domain: config.API.DEV,
            cdn: config.API.TEST
        }, {
            domain: config.REPORT.DEV,
            cdn: config.REPORT.TEST
        }]))
        .pipe(jshint.reporter(stylish))
        .pipe(gulp.dest(config.PATH.TEST + "/js/"));
});
gulp.task("testUtils", ["testJS"], function() {
    return gulp.src(config.PATH.DEV + "/utils/*.js")
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(gulp.dest(config.PATH.TEST + "/utils/"));
});
gulp.task("testPHP", ["testUtils"], function() {
    return gulp.src(config.PATH.DEV + "/*.php")
        .pipe(gulp.dest(config.PATH.TEST + "/"));
});
gulp.task("testLib", ["testPHP"], function() {
    return gulp.src(config.PATH.DEV + "/lib/*")
        .pipe(gulp.dest(config.PATH.TEST + "/lib/"));
});


/* 执行测试环境命令 */
gulp.task("test", ["testLib"], function() {
    console.log('Task Test has been completed');
});



/* 体验环境打包 */
gulp.task("liveClear",function(cb){
    del.sync(config.PATH.LIVE + "/*");
    cb();
});
gulp.task("liveConfig", ["liveClear"], function() {
    return gulp.src(config.PATH.TEST + "/config.test.js")
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(cdn([{
            domain: config.API.TEST,
            cdn: config.API.LIVE
        }, {
            domain: config.REPORT.TEST,
            cdn: config.REPORT.LIVE
        }, {
            domain: config.STYLE.TEST,
            cdn: config.STYLE.LIVE
        }]))
        .pipe(concat("config.live.js"))
        .pipe(gulp.dest(config.PATH.LIVE + "/"));
});
gulp.task("liveHtml", ["liveConfig"], function() {
    return gulp.src(config.PATH.TEST + "/*.html")
        .pipe(cdn([{
            domain: config.STYLE.TEST,
            cdn: config.STYLE.LIVE
        }, {
            domain: "config.test.js",
            cdn: "config.live.js"
        }]))
        .pipe(gulp.dest(config.PATH.LIVE + "/"));
});
gulp.task("liveJS", ["liveHtml"], function() {
    return gulp.src(config.PATH.TEST + "/js/*.js")
        .pipe(jshint())
        .pipe(cdn([{
            domain: config.API.TEST,
            cdn: config.API.LIVE
        }, {
            domain: config.REPORT.TEST,
            cdn: config.REPORT.LIVE
        }]))
        .pipe(jshint.reporter(stylish))
        .pipe(gulp.dest(config.PATH.LIVE + "/js/"));
});
gulp.task("liveUtils", ["liveJS"], function() {
    return gulp.src(config.PATH.TEST + "/utils/*.js")
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(gulp.dest(config.PATH.LIVE + "/utils/"));
});
gulp.task("livePHP", ["liveUtils"], function() {
    return gulp.src(config.PATH.TEST + "/*.php")
        .pipe(gulp.dest(config.PATH.LIVE + "/"));
});
gulp.task("liveLib", ["livePHP"], function() {
    return gulp.src(config.PATH.TEST + "/lib/*")
        .pipe(gulp.dest(config.PATH.LIVE + "/lib/"));
});

/* 执行体验环境命令 */
gulp.task("live", ["liveLib"], function() {
    console.log('Task live has been completed');
});



/* 正式环境打包 */
gulp.task("distClear",function(cb){
    del.sync(config.PATH.RELEASE + "/*");
    cb();
});
gulp.task("distConfig", ["distClear"], function() {
    return gulp.src(config.PATH.LIVE + "/config.live.js")
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(cdn([{
            domain: config.API.LIVE,
            cdn: config.API.RELEASE
        }, {
            domain: config.REPORT.LIVE,
            cdn: config.REPORT.RELEASE
        }, {
            domain: config.STYLE.LIVE,
            cdn: config.STYLE.RELEASE
        }]))
        .pipe(uglify())
        .pipe(concat("config.js"))
        .pipe(gulp.dest(config.PATH.RELEASE + "/"));
});
gulp.task("distHtml", ["distConfig"], function() {
    return gulp.src(config.PATH.LIVE + "/*.html")
        .pipe(cdn([{
            domain: config.STYLE.LIVE,
            cdn: config.STYLE.RELEASE
        }, {
            domain: "config.live.js",
            cdn: "config.js"
        }]))
        .pipe(gulp.dest(config.PATH.RELEASE + "/"));
});
gulp.task("distJS", ["distHtml"], function() {
    return gulp.src(config.PATH.LIVE + "/js/*.js")
        .pipe(jshint())
        .pipe(cdn([{
            domain: config.API.LIVE,
            cdn: config.API.RELEASE
        }, {
            domain: config.REPORT.LIVE,
            cdn: config.REPORT.RELEASE
        }]))
        .pipe(jshint.reporter(stylish))
        .pipe(uglify())
        .pipe(gulp.dest(config.PATH.RELEASE + "/js/"));
});
gulp.task("distUtils", ["distJS"], function() {
    return gulp.src(config.PATH.LIVE + "/utils/*.js")
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(uglify())
        .pipe(gulp.dest(config.PATH.RELEASE + "/utils/"));
});
gulp.task("distPHP", ["distUtils"], function() {
    return gulp.src(config.PATH.LIVE + "/*.php")
        .pipe(gulp.dest(config.PATH.RELEASE + "/"));
});
gulp.task("distLib", ["distPHP"], function() {
    return gulp.src(config.PATH.LIVE + "/lib/*")
        .pipe(gulp.dest(config.PATH.RELEASE + "/lib/"));
});

/* 执行体验环境命令 */
gulp.task("dist", ["distLib"], function() {
    console.log('Task dist has been completed');
});

// 默认任务
gulp.task("default", function() {
    console.log('============== Gulp Info ============');
    console.log('1. use "gulp test" command publish file form src to test!');
    console.log('1. use "gulp live" command publish file form test to live!');
    console.log('1. use "gulp dist" command publish file form live to dist!');
    console.log('=====================================');
});