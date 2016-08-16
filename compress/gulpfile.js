var gulp = require('gulp'),
    uglify = require('gulp-uglify'),//js压缩
    cleancss = require('gulp-clean-css')/*,
    cssverison = require('gulp-make-css-url-version')*/;

gulp.task('testCssMin', function (){
    gulp.src('src/css/*.css')
        .pipe(cleancss({
            advanced: false, //类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
            compatibility: true, //保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
            keepBreaks: false, //类型：Boolean 默认：false [是否保留换行]
            keepSpecialComments: '*' //保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
        }))
//        .pipe(cssverison()) //给css文件里引用文件加版本号（文件MD5）
        .pipe(gulp.dest('dist/css'));
});

gulp.task('testJsMin', function(){
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});
    
/*gulp.task('cleancss', function(){
    return gulp.src('css/*.css') //要压缩的css文件
        .pipe(cleancss()) //执行压缩
        .pipe(gulp.dest('dist/css')); //输出文件夹
});*/

/*gulp.task('clean', function (cb){
    del(['dist'], cb);
});

gulp.task('default', ['clean'], function (){
    gulp.start(['cleancss']);
});*/