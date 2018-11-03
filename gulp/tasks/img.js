module.exports = () => {
    $.gulp.task('img:dev', () => {
        return $.gulp.src('src/static/img/**/*')
        .pipe($.gulp.dest('build/static/img'));
    });

    $.gulp.task('img:build', () => {
        return $.gulp.src('src/static/img/**/*')
        .pipe($.plugins.imagemin([
            $.plugins.imagemin.gifsicle({interlaced: true}),
            $.plugins.imagemin.jpegtran({progressive: true}),
            $.plugins.imagemin.optipng({optimizationLevel: 3}),
            $.plugins.imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        // .pipe($.plugins.webp({
        //     use: [
        //         $.plugins.webp({quality: 90})
        //     ]
        // }))
        .pipe($.gulp.dest('build/static/img'));
    });
};
