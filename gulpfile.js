'use strict';
let gulp = require('gulp');
let sass = require('gulp-sass');
let webpack = require('gulp-webpack');
let del = require('del');


let jsPaths = ['dev/**/*.js']
let htmlPaths = ['dev/*.html']
let scssPaths = ['dev/scss/*.scss']
let mediaPaths = ['dev/media/*']
let output = __dirname + '/public/'

gulp.task('del-public', () => {
  del.sync([output + '*'])
})

gulp.task('sass', () => {
  del.sync([output + 'css'])
  gulp.src(scssPaths)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(output + 'css'))
})

gulp.task('copy-html', () => {
  del.sync([output + '*.html'])
  gulp.src(htmlPaths)
    .pipe(gulp.dest(output))
})

gulp.task('copy-media', () => {
  del.sync([output + 'media'])
  gulp.src(mediaPaths)
    .pipe(gulp.dest(output + 'media'))
})

gulp.task('bundle', () => {
  return gulp.src(__dirname + '/dev/entry.js')
  .pipe(webpack({
    output: {
      filename: 'bundle.js'
    }
  }))
  .pipe(gulp.dest(output));
});

gulp.task('copy-public', ['sass', 'bundle', 'copy-html', 'copy-media'])

gulp.task('watch', () =>{
  gulp.watch(scssPaths, ['sass']);
  gulp.watch(jsPaths, ['bundle']);
  gulp.watch(htmlPaths, ['copy-html']);
  gulp.watch(mediaPaths, ['copy-media']);
});

gulp.task('default', ['copy-public', 'watch']);
