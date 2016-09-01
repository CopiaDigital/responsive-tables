/* global require */
var del = require('del');
var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-minify');
 
gulp.task('compress', function() {
  gulp.src('lib/*.js')
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.min.js'
        }
    }))
    .pipe(gulp.dest('build/js'))
});

// Compile Our Sass
gulp.task('sass', function() {
  return gulp.src('./lib/css/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('build/css'));
});