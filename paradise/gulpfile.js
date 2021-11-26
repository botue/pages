
const {src, dest, series, parallel, watch} = require('gulp');

// const less = require('gulp-less');
const sass = require('gulp-sass')(require('sass'));

const postcss = require('gulp-postcss');

const browserSync = require('browser-sync').create();
const reload = browserSync.reload;


function css() {
  return src('scss/**/[!_]*.scss')
    .pipe(sass())
    .pipe(postcss([]))
    .pipe(dest('./css'));
}

function serve(cb) {
  browserSync.init({
    server: "./"
  });

  watch('./scss/*.scss', series(css)).on('change', reload);
  watch('./*.html').on('change', reload);

  cb();
}

exports.default = series(serve, css);
