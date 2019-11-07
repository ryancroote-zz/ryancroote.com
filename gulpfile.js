const { series, parallel, src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const normalizeSass = require('node-normalize-scss');
const process = require('process');
const env = process.env.NODE_ENV || 'development';

const defaultTask = (cb) => {
  cb();
};

const css = (cb) => {
  src('src/scss/main.scss')
    .pipe(
      sass({
        includePaths : [
          normalizeSass.includePaths
        ],
        outputStyle  : 'compressed'
      }).on('error', sass.logError)
    )
    .pipe(dest('src/11ty/includes/css/'));
  if (cb) {
    cb();
  }
};

const cssWatch = () => {
  watch('src/scss/**/*.scss', css);
};

const dev = series(css, cssWatch);

module.exports = {
  default : defaultTask,
  css,
  dev
};
