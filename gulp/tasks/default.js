var gulp = require('gulp');



// default Task
gulp.task('default',['styles', 'compile-twig', 'browser-sync'], function () {
	gulp.watch("dev/styles/**/*.styl", ['styles']);
	gulp.watch("dev/twig/**.*", ['compile-twig']);
});