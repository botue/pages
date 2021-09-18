const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const reload = browserSync.reload;

// scss编译后的css将注入到浏览器里实现更新
gulp.task('sass', function() {
  return gulp.src("./scss/*.scss")
      .pipe(sass({
          outputStyle: 'expanded'
      }))
      .pipe(gulp.dest("./css"))
      .pipe(reload({stream: true}));
});

function serve() {
  browserSync.init({
    server: './'
  });

  gulp.watch('./scss/*.scss', gulp.series('sass'));
  gulp.watch('./*.html').on('change', reload);
}

exports.default = serve;



