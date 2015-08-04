var gulp = require('gulp'),
    concat = require('gulp-concat'),
    minifyHTML = require('gulp-minify-html'),
    uglify = require('gulp-uglify');

gulp.task('minify-html', function() {
    return gulp.src('source/texts/*.html')
        .pipe(minifyHTML())
        .pipe(gulp.dest('mini/'));
});
gulp.task('default', function() {
    gulp.run('html', 'angular', "scripts");
});
