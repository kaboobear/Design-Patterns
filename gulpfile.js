var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('typescript', function () {
  return gulp
    .src('./src/*.ts')
    .pipe(
      ts({
        noEmitOnError: true,
      }),
    )
    .pipe(gulp.dest('./dist'));
});

function watchTs() {
  gulp.watch('./src/*.ts', gulp.series('typescript'));
}

gulp.task('default', watchTs);
