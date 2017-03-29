var gulp = require('gulp');

var babel = require("gulp-babel");
var sourcemaps = require("gulp-sourcemaps");
var concat = require("gulp-concat");

gulp.task('js', function () {
  return gulp.src("src/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat("bundle.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/js"));
});

var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');

gulp.task('css', function(){
  return gulp.src('src/style.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('default', [ 'js', 'css' ]);

gulp.task('watch', function () {
  gulp.watch("src/**/*.js", ['js']);
  gulp.watch('src/**/*.scss', ['css']);
});
