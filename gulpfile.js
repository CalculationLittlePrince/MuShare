var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var sassPaths = [
  'static/components/foundation-sites/scss',
  'static/components/motion-ui/src',
  'static/components/Ionicons/scss',
  'static/components/slick-carousel/slick',
  'static/components/semantic/dist',
];

gulp.task('sass', function() {
  return gulp.src('static/scss/app.scss')
    .pipe($.sass({
      includePaths: sassPaths,
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9'],
    }))
    .pipe(gulp.dest('static/css'));
});

gulp.task('default', ['sass'], () => {
  gulp.watch(['static/scss/**/*.scss'], ['sass']);
});
