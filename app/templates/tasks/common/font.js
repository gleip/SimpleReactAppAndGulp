import gulp from 'gulp';
import settings from './../settings';

export default gulp.task('font', () => {
  return gulp.src(settings.font.src)
  .pipe(gulp.dest(settings.font.build));
});
