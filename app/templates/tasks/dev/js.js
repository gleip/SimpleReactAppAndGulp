import gulp from 'gulp';
import util from 'gulp-util';
import babelify from 'babelify';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import uglify from 'gulp-uglify';
import sourcemaps from 'gulp-sourcemaps';
import settings from './../settings';

export default gulp.task('js', () => (
  browserify({
    entries: settings.js.entries,
    extensions: ['.jsx', '.js'],
    debug: true,
  })
  .transform(babelify, {
    plugins: ['transform-class-properties', 'transform-async-to-generator'],
  })
  .bundle()
  .on('error', function (err) {
    util.log(util.colors.red.bold(settings.js.errorMsg));
    util.log(err.message);
    this.emit('end');
  })
  .pipe(source(settings.js.buildFileName))
  .pipe(buffer())
  .pipe(sourcemaps.init({ loadMaps: true }))
  // .pipe(uglify())
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest(settings.js.buildDir))
));
