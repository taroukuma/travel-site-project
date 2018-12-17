var gulp = require('gulp'),
watch = require('gulp-watch')

gulp.task('default', function() {
    console.log('Hello. Gulp seems to work! Good job!')
})

gulp.task('html', function() {
    console.log('Something changed with the html files.')
})

gulp.task('css', function() {
    console.log('Something changed with the css files.')
})

gulp.task('watch', function() {
    
    watch('./app/**/*.html', function() {
        gulp.start('html')
    })

    watch('./app/assets/**/*.css', function() {
        gulp.start('css')
    })
})