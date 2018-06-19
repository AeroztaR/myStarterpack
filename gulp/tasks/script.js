module.exports = () => {
    $.gulp.task('script:lib', () => {
        return $.gulp.src([
            'node_modules/swiper/dist/js/swiper.min.js'
        ])
          .pipe($.plugins.plumber())
          .pipe($.plugins.concat('libs.min.js'))
          .pipe($.uglify())
          .pipe($.gulp.dest('build/static/js'))
          .pipe($.browserSync.reload({
              stream: true
          }));
      });

      $.gulp.task('script', () => {
        return $.gulp.src([
            'src/static/js/main.js'
        ])
          .pipe($.plugins.plumber())
          .pipe($.gulp.dest('build/static/js'))
          .pipe($.browserSync.reload({
              stream: true
          }));
      });
};