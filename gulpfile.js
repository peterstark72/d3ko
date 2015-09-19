var gulp = require('gulp');
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var connect = require('connect');
var serve = require('serve-static');

gulp.task('browserify', function () {
    return browserify('./app/main.js')
        .bundle()
        .pipe(source('insyn.js'))
        //.pipe(buffer())
        //.pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('server', function () {
    return connect().use(serve(__dirname))
        .listen(8080)
        .on('listening', function () {
            console.log("Running server: View http://localhost:8080/");
        });
});