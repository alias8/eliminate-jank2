var gulp = require('gulp'),
    babel = require('gulp-babel'),
    cleanCSS = require('gulp-clean-css'),
	concatify = require('gulp-concat'),
    htmlmin = require('gulp-htmlmin'),
    imageop = require('gulp-image-optimization'),
    imageResize = require('gulp-image-resize'),
    rename = require("gulp-rename"),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify');

// Paths to various files
var paths = {
    stylesheets: ['src/css/*'],
    scripts: ['src/js/*.js'],
    imageSource: ['src/images/*'],
    htmlSource: ['src/*.html']
};

gulp.task('image-hero-1440w', function () {
    return gulp.src(paths.imageSourceHero)
        .pipe(imageResize({ width: 1440, crop: false }))
        .pipe(rename({ suffix: '-1440w' }))
        .pipe(gulp.dest('./build/images'));
});

gulp.task('image-hero-720w', function () {
    return gulp.src(paths.imageSourceHero)
        .pipe(imageResize({ width: 720, crop: false }))
        .pipe(rename({ suffix: '-720w' }))
        .pipe(gulp.dest('./build/images'));
});

gulp.task('image-hero-360w', function () {
    return gulp.src(paths.imageSourceHero)
        .pipe(imageResize({ width: 360, crop: false }))
        .pipe(rename({ suffix: '-360w' }))
        .pipe(gulp.dest('./build/images'));
});

gulp.task('minify-css', function () {
    return gulp.src(paths.stylesheets)
        //.pipe(sourcemaps.init())
        //.pipe(cleanCSS())
        //.pipe(sourcemaps.write())
        .pipe(gulp.dest('./build/css'));
});

// Transpiles to ES5, minifies and concatinates js files and outputs them to build/js/app.js 
gulp.task('minify-js', function () {
    return gulp.src(paths.scripts)
        //.pipe(babel({
        //     presets: ['es2015']
        //}))
        //.pipe(sourcemaps.init())
        //.pipe(uglify())
        //.pipe(concatify('app.js'))
        //.pipe(sourcemaps.write())
        .pipe(gulp.dest('./build/js/'));
});

// Minifies our HTML files and outputs them to build/*.html
gulp.task('minify-html', function () {
    return gulp.src(paths.htmlSource)
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('./build'));
});

// Optimizes our image files and outputs them to build/image/*
gulp.task('image-optimize', function () {
    return gulp.src(paths.imageSource)
                .pipe(imageop({
                    optimizationLevel: 5
                }))
                .pipe(gulp.dest('./build/images'));
});

gulp.task('default',
    ['minify-html',
        'minify-js',
        'minify-css',
    'image-optimize']);

