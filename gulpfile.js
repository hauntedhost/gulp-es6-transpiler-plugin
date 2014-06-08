var gulp = require('gulp');

// plugins
var concat = require('gulp-concat'),
    es6transpiler = require('gulp-es6-transpiler'),
    plumber = require('gulp-plumber');

var onError = function(err) {
  gutil.beep();
  console.log(err);
};

// compile scripts
gulp.task('scripts', function () {
  // vendor scripts
  gulp.src('js/vendor/*.js')
      .pipe(plumber({
        errorHandler: onError
      }))
      .pipe(concat('vendor.js'))
      .pipe(gulp.dest('dist'))

  // app scripts
  gulp.src('js/app/*.js')
      .pipe(plumber({
        errorHandler: onError
      }))
      .pipe(concat('app.js'))
      .pipe(es6transpiler({
        globals: { '$': false }
      }))
      .pipe(gulp.dest('dist'))
});

// watch
gulp.task('watch', function() {
  gulp.watch(['js/vendor/*.js', 'js/app/*.js'], ['scripts']);
});

// default build
gulp.task('default', ['scripts']);
