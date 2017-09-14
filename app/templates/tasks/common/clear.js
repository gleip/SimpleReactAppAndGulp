import gulp from 'gulp';
import rimraf from 'gulp-rimraf';
import settings from './../settings';

export default gulp.task('clear', () => (
  gulp.src(`${settings.server.baseDir}/*`)
    .pipe(rimraf())
));
