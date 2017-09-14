import gulp from 'gulp';
import sass from 'gulp-sass';
import minify from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';
import settings from './../settings';

export default gulp.task('css.prod', () => (
  gulp.src(settings.css.src)
    .pipe(sass({
      outputStyle: 'compressed',
    }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(minify())
    .pipe(gulp.dest(settings.css.build))
));
