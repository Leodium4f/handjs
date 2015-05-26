var gulp = require('gulp-param')(require('gulp'), process.argv),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean'),
    pkg = require('./package.json');
    
    
//gulp.task('base', function() {
//  return gulp.src(['src/hand.base.js'])
//    .pipe(rename({suffix: '.min'}))
//    .pipe(uglify())
//    .pipe(gulp.dest('dist/'));
//});
//
//gulp.task('css', function() {
//  return gulp.src(['src/hand.css.js'])
//    .pipe(rename({suffix: '.min'}))
//    .pipe(uglify())
//    .pipe(gulp.dest('dist/'));
//});

gulp.task('concat-default', function() {
    return gulp.src([
        'src/hand.base.js',
        'src/hand.css.js'
    ])
    .pipe(concat('hand.js'))
    .pipe(gulp.dest('bin/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('bin/'));
});

gulp.task('concat-versioned', function() {
    return gulp.src([
        'src/hand.base.js',
        'src/hand.css.js'
    ])
    .pipe(concat('hand.' + pkg.version + '.js'))
    .pipe(gulp.dest('bin/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('bin/'));
});
    
gulp.task('default', ['concat-default', 'concat-versioned']);
