import gulp from 'gulp';
import settings from './../settings';

export default gulp.task('media', () => {
  return gulp.src(settings.media.src)
    .pipe(gulp.dest(settings.media.build));
});
