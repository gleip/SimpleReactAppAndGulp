import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import settings from './../settings';

export default gulp.task('img.prod', () => (
  gulp.src(settings.img.src)
    .pipe(imagemin())
    .pipe(gulp.dest(settings.img.build))
));
