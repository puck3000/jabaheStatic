var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var stylus = require('gulp-stylus');
var jeet = require('jeet');
var autoprefixer = require('autoprefixer-stylus');

// styles task
gulp.task('styles',['minifyCSS'], function() {
    return gulp.src('dev/styles/**/*.styl')
      .pipe(stylus({
        'include css': true,
      	compress:true,
        use: [autoprefixer(), jeet()]
      }))
	   .pipe(gulp.dest('dist/assets/styles/'))
     .pipe(reload({stream:true}));

});
