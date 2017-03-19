const gulp = require("gulp");
const sass = require("gulp-sass");
const rename = require("gulp-rename");
const webpack = require('webpack-stream');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');

// compiles the SASS code and creates both a minified and unminifed file
gulp.task("sass", () => {
    return gulp.src("./src/css/styles.scss")
        .pipe(sass())
        .pipe(rename("bundle.css"))
        .pipe(gulp.dest("./dist/css"))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename("bundle.min.css"))
        .pipe(gulp.dest('./dist/css'));
});

// compiles JS code and creates both a minified and unminified file
gulp.task('js', () => {
    return gulp.src('./src/js/index.js')
        .pipe(webpack( require('./webpack.config.js') ))
        .pipe(rename("bundle.js"))
        .pipe(gulp.dest('./dist/js'))
        .pipe(uglify())
        .pipe(rename("bundle.min.js"))
        .pipe(gulp.dest('./dist/js'));
});

// watches for any local changes and rebuilds the JS or CSS
gulp.task('watch', () => {
    gulp.watch(['./src/**/*.js', './src/**/*.jsx'], ['js']);
    gulp.watch(['./src/**/*.css', './src/**/*.scss'], ['sass'])
});


// only needs to be run once upon first use of code to build the initial dist folder + files
gulp.task('build', ['js', 'sass']);