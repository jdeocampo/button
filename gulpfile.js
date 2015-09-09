var gulp = require('gulp'),
    less = require('gulp-less'),
  cssmin = require('gulp-cssmin'),
  rename = require('gulp-rename');

gulp.task('watch', function () {
  gulp.watch('./assets/less/**/*', ['less']);
});

gulp.task('less', function () {

  return gulp.src('./assets/less/style.less')
  .pipe(less().on('error', function (err) {
    console.log(err);
  }))
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('./assets/css'));

});

gulp.task('default', ['less', 'watch']);