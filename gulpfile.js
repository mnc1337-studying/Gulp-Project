const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();


function buildStyles() {
    return src('src/styles/main.scss')
        .pipe(sass({ style: 'expanded' }).on('error', sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(dest('docs/css'))

        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('docs/css'))
        .pipe(browserSync.stream());
}

function buildHTML() {
    return src('src/index.html').pipe(dest('docs')).pipe(browserSync.stream());
}


function serve() {
    browserSync.init({ server: 'docs' });
    watch('src/styles/**/*.scss', buildStyles);
    watch('src/*.html', buildHTML);
}

exports.build = series(buildHTML, buildStyles);
exports.default = series(buildHTML, buildStyles, serve);