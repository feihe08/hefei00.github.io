var gulp = require('gulp')
var replace = require('gulp-replace');
gulp.task('move', function () {
  return gulp.src('./build/index.html')
    .pipe(replace(/\/blog\//g, '\/blog\/build\/'))
    .pipe(gulp.dest(''))
})