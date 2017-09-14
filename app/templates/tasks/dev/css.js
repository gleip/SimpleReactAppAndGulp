import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import settings from './../settings';

export default gulp.task('css', () => (
  gulp.src(settings.css.src)
    .pipe(sourcemaps.init({
      loadMaps: true,
    }))
    .pipe(sass({
      outputStyle: 'compressed',
    }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(settings.css.build))
));
