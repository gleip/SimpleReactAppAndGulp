import gulp from 'gulp';
import browserSync from 'browser-sync';
import requireDir from 'require-dir';
import settings from './tasks/settings';

requireDir('./tasks/common');
requireDir('./tasks/dev');
requireDir('./tasks/build');

gulp.task('watch', () => {
  gulp.watch(settings.watch.js, gulp.series('js'));
  gulp.watch(settings.watch.img, gulp.series('img'));
  gulp.watch(settings.watch.css, gulp.series('css'));
  gulp.watch(settings.watch.font, gulp.series('font'));
  gulp.watch(settings.watch.browserSync).on('change', browserSync.reload);
});

gulp.task('build.dev', gulp.series('clear', gulp.parallel('js', 'css', 'img', 'font')));
gulp.task('dev', gulp.parallel('watch', gulp.series('clear', 'build.dev', 'server')));

gulp.task('build', gulp.series('clear', gulp.parallel('js.prod', 'css.prod', 'img.prod', 'font')));
