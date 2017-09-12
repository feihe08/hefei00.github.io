var gulp = require('gulp')
var replace = require('gulp-replace');
gulp.task('move', function () {
  return gulp.src('./build/index.html')
    .pipe(replace(/\/static\//g, '/build/static/'))
    .pipe(gulp.dest(''))
})