const gulp      = require("gulp");
const sass      = require("gulp-sass");
const rename    = require("gulp-rename");
const webpack   = require('webpack-stream');

// grabs all of scss code and turns it into a singular css file
gulp.task("sass", () => {
    return gulp.src("./src/css/styles.scss")
        .pipe(sass())
        .pipe(rename("bundle.css"))
        .pipe(gulp.dest("./dist/css"));
});


// grabs all of the js code and using the webpack config turns it into a singular js file
gulp.task('js', () => {
    return gulp.src('./src/js/index.js')
        .pipe(webpack( require('./webpack.config.js') ))
        .pipe(rename("bundle.js"))
        .pipe(gulp.dest('./dist/js'));
});


// watches for any local changes and rebuilds
gulp.task('watch', () => {
    gulp.watch(['./src/**/*.js', './src/**/*.jsx'], ['js']);
    gulp.watch(['./src/**/*.css', './src/**/*.scss'], ['sass'])
});


// only needs to be run once upon first use of code to build the initial dist files
gulp.task('build', ['js', 'sass']);