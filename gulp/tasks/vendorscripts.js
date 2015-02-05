// vendorscripts
var gulp = require('gulp');


gulp.task('vendorscripts', function() {
  return gulp.src('.tmp/*.*')
  .pipe(gulp.dest('dist/assets/scripts/vendor/'));
});