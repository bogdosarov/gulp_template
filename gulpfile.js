var gulp = require('gulp'),
    less = require('gulp-less'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    autoprefix = require('gulp-autoprefixer');

var src = {
    less: 'app/styles/**/*.less',
    css:  'app/styles/compiled',
    html: 'app/*.html'
};

gulp.task('css', function () {
    console.log('compile css');
    gulp.src(src.less)
        .pipe(less())
        .pipe(autoprefix('last 3 version'))
        .pipe(gulp.dest(src.css))
        .pipe(reload({stream: true}));
});

gulp.task('serve', ['css'], function() {

    browserSync({
        server: "./app"
    });

    gulp.watch(src.less, ['css']);
    gulp.watch(src.html).on('change', reload);
});