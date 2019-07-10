const gulp = require('gulp'); //引入gulp
const watch = require('gulp-watch'); //引入监听的gulp插件
const minihtml = require('gulp-minify-html'); //引入html的压缩插件
const comfilesass = require('gulp-sass'); //编译sass
const minicss = require('gulp-minify-css');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const babel = require('gulp-babel');
const es2015 = require('babel-preset-es2015');


//压缩html*****
gulp.task('uglifyhtml', () => {
    return gulp.src('src/*.html') //引入文件
        .pipe(minihtml()) //执行压缩插件
        .pipe(gulp.dest('dist/')); //输出
});


//编译压缩sass-->css
gulp.task('compilesass', () => {
    return gulp.src('src/sass/*.scss')
        .pipe(comfilesass({ //执行sass编译
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('dist/style'));
});

//压缩css文件*****
gulp.task('uglifycss', () => {
    return gulp.src('src/*.css') //引入文件
        .pipe(minicss()) //执行压缩插件
        .pipe(gulp.dest('dist/')); //输出
});


//压缩js
gulp.task('uglifyjs', () => {
    return gulp.src('src/script/js/*.js') //引入文件
        .pipe(uglify()) //执行压缩插件
        .pipe(gulp.dest('dist/script/js')); //输出
});

//压缩图片
gulp.task('uglifyimage', () => {
    return gulp.src('src/images/*/*.{png,jpg,gif,ico}')
        .pipe(imagemin({
            optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
        }))
        .pipe(gulp.dest('dist/images'));
});

//压缩png图片*****
gulp.task('uglifypng', () => {
    return gulp.src('src/img/*.{png,jpg,gif,ico}')
        .pipe(imagemin({
            optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
        }))
        .pipe(gulp.dest('dist/img'));
});

//es6转es5并压缩*****
//gulp-babel gulp-core  babel-preset-es2015
gulp.task('babeljs', () => {
    return gulp.src('src/script/js/*.js') //引入文件
        .pipe(babel({
            presets: ['es2015']
        })) //执行压缩插件
        .pipe(uglify())
        .pipe(gulp.dest('dist/script/js')); //输出
});





gulp.task('default', function() { //default:默认名称，编译时可以省略
    watch(['src/*.html', 'src/*.css', 'src/img/*.png', 'src/script/js/*.js'], gulp.parallel('uglifyhtml', 'uglifycss', 'uglifypng', 'babeljs'));
});




//1.文件的复制：将开放目录里面的文件直接复制到dist目录。
//gulp.task : 执行gulp任务
//第一个参数：任务名。
//第二个参数：回调函数。
//gulp.src : 引入文件的目录
//gulp.dest : 输出文件目录设置
// gulp.task('copyhtml',function(){
//     gulp.src('src/*.html').pipe(gulp.dest('dist/'));
// });

//监听任务。
// gulp.task('default',function(){//default:默认名称，编译时可以省略
//     watch(['src/*.html'],gulp.parallel('copyhtml'));
// });

//gulp.parallel():同时执行一些任务