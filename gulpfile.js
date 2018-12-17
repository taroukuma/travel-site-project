var gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    simplevars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    prefixer = require('autoprefixer')

gulp.task('default', function () {
    return console.log('Hello. Gulp seems to work! Good job!')
})

gulp.task('html', function () {
    console.log('Something changed with the html files.')
})

gulp.task('css', function () {
    return gulp.src('./app/assets/styles/*.css')
        .pipe(postcss([simplevars, nested, prefixer]))
        .pipe(gulp.dest('./app/temp/styles/'))
})

gulp.task('watch', function () {

    watch('./app/**/*.html', function () {
        gulp.start('html')
    })

    watch('./app/assets/**/*.css', function () {
        gulp.start('css')
    })
})