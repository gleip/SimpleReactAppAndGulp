import gulp from 'gulp';
import settings from './../settings';

export default gulp.task('img', () => (
  gulp.src(settings.img.src)
    .pipe(gulp.dest(settings.img.build))
));
