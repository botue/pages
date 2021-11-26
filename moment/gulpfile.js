
const {src, dest, series, watch} = require('gulp');

const less = require('gulp-less');

const postcss = require('gulp-postcss');

const browserSync = require('browser-sync').create();
const reload = browserSync.reload;


function css() {
  return src('less/**/[!_]*.less')
    .pipe(less())
    .pipe(postcss([]))
    .pipe(dest('./css'));
}

function serve(cb) {
  browserSync.init({
    server: "./"
  });

  watch('./less/*.less', series(css)).on('change', reload);
  watch('./*.html').on('change', reload);

  cb();
}

exports.default = series(serve, css);
