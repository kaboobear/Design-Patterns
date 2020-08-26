
//----------------------Simple Typescript Pipe-------------------------

var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('typescript', function () {
    return gulp.src('./src/*.ts')
        .pipe(ts({
            noEmitOnError:true
        }))
        .pipe(gulp.dest('./dist'));
});

function watchTs(){
    gulp.watch('./src/*.ts',gulp.series("typescript"));
}

gulp.task("default", watchTs);









//--------------------------Gulp + Watchify-----------------------------

// var gulp = require('gulp');
// var ts = require('gulp-typescript');
// var browserify = require("browserify");
// var source = require('vinyl-source-stream');
// var watchify = require("watchify");
// var tsify = require("tsify");
// var gutil = require("gulp-util");

// var watchedBrowserify = watchify(browserify({
//     basedir: '.',
//     debug: true,
//     entries: ['src/script.ts'],
//     cache: {},
//     packageCache: {}
// }).plugin(tsify));

// gulp.task("copy-html", function () {
//     return gulp.src('src/*.html')
//         .pipe(gulp.dest('dist'));
// });

// function bundle() {
//     watchHtml();

//     return watchedBrowserify
//         .bundle()
//         .on("error", gutil.log)
//         .pipe(source('script.js'))
//         .pipe(gulp.dest("dist"));
// }

// function watchHtml(){
//     gulp.watch("src/*.html",gulp.series("copy-html"))
// }

// gulp.task("default", bundle);
// watchedBrowserify.on("update", bundle);
// watchedBrowserify.on("log", gutil.log);