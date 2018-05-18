const gulp = require('gulp');
//For Sass
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const livereload = require('gulp-livereload');

//For Css
const rename = require('gulp-rename');
const gulpminifycss = require('gulp-minify-css');
const plumber = require('gulp-plumber');
const remember = require('gulp-remember');

//For Js
const rigger = require('gulp-rigger');
const uglify = require('gulp-uglify');
const notify = require('gulp-notify');
const newer = require('gulp-newer'); /*  Plugin look for new changes in files */

/* Plugin for Images */
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

const clean = require('gulp-clean'); /* Plugin delete some folder, content */
const browserSync = require("browser-sync");
const reload = browserSync.reload;

/*Task for webserver*/
const config = {
  server: {
      baseDir: "./src"
  },
  tunnel: false,
  host: 'localhost',
  port: 9000,
  logPrefix: "SergeyKoval"
};

gulp.task('webserver', function () {
  browserSync(config);
});

gulp.task('html', function() {
  return gulp.src('./src/index.html')
  //.pipe(rigger())
  .pipe(gulp.dest('./src'))
  .pipe(reload({stream: true}));
});

gulp.task('css', function() {
  return gulp.src('./src/css/main.css')
  .pipe(gulpminifycss())
  .pipe(rename('main.min.css'))
  .pipe(gulp.dest('./src/css'))
  .pipe(reload({stream: true}));
});

gulp.task('sass', function() {
  return gulp.src('./src/sass/**/*.scss')
  .pipe(plumber())
  .pipe(autoprefixer({
    browsers: ['last 2 version'],
    casced : false,
  }))
  .pipe(remember('sass'))
  .pipe(sass())
  .pipe(gulp.dest('./src/css/'))
  .pipe(reload({stream: true}));
});

/* Task for folder Images */
gulp.task('image', function () {
  gulp.src('./src/img/**/*.*')
      .pipe(newer('./src/img/'))
      .pipe(imagemin({
          progressive: true,
          svgoPlugins: [{removeViewBox: false}],
          use: [pngquant()],
          interlaced: true
      }))
      .pipe(gulp.dest('./src/img/'))
      .pipe(reload({stream: true}));
});

/* Task for folder Fonts */
gulp.task('fonts', function() {
  gulp.src('./src/fonts/**/*.*')
    .pipe(newer('./src/fonts/'))
    .pipe(gulp.dest('./src/fonts/'))
});

gulp.task('watch', function() {
  gulp.watch('./src/**/*.html', ['html']);
  gulp.watch('./src/sass/**/*.scss', ['sass']);
  gulp.watch('./src/css/main.css', ['css']);
  gulp.watch('./src/img/**/*.*', ['image']);
  gulp.watch('./src/js/**/*.js', ['js']);
  gulp.watch('./src/vendor/**/*.*', ['vendor']);
});

gulp.task('build', ['html', 'sass', 'css', 'fonts', 'image' ]);
gulp.task('default', ['build', 'webserver', 'watch']);

/* Task Clean (delete folder [build/]) */
gulp.task('clean', function () {
  return gulp.src('build', {read: false})
      .pipe(clean());
});