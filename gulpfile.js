'use strict';

const { src, dest, watch, parallel }	= require('gulp');

const del														= require('del');
const pug														= require('gulp-pug');
const sass													= require('gulp-sass');
const svgMin												= require('gulp-svgmin');
const rename												= require('gulp-rename');
const imgMin												= require('gulp-imagemin');
const browserSync										= require('browser-sync').create();
const imgCompress										= require('imagemin-jpeg-recompress');

function cleaning() {
	return del('build');
}

function server() {
	browserSync.init({
		browser: 'firefox',
		server: {
			baseDir: './build'
		}
	});
}

function html() {
	return src('dev/html/*.pug')
		.pipe(pug({
			pretty: true
		}))
		.pipe(rename({
			basename: 'index'
		}))
		.pipe(dest('build'))
}

function css() {
	return src('dev/styles/*.sass')
		.pipe(sass())
		.pipe(dest('build/css'))
		.pipe(browserSync.stream());
}

function js() {
  return src('dev/js/*.js')
    .pipe(dest('build/js'))
}

function img() {
	return src(['dev/img/**/*.*', '!dev/img/**/*.svg'])
		.pipe(imgMin([
			imgCompress({
				loops: 6,
				min: 70,
				max: 85,
				quality: 'high'
			})
		]))
		.pipe(dest('build/img'))
		.pipe(browserSync.stream());
}

function svg() {
	return src('dev/img/**/*.svg')
		.pipe(svgMin())
		.pipe(dest('build/img'))
}

function watching() {
	watch(['dev/img/**/*.*', '!dev/img/**/*.svg'], parallel(img));
	watch(['dev/html/**/*.pug'], parallel(html));
	watch(['dev/styles/**/*.sass'], parallel(css));
	watch(['dev/js/**/*.js'], parallel(js));

	watch(['build/*.html', 'build/**/*.js']).on('change', browserSync.reload);
}

exports.js 					= js;
exports.css 				= css;
exports.svg 				= svg;
exports.img 				= img;
exports.html 				= html;
exports.server 			= server;
exports.watching 		= watching;
exports.cleaning 		= cleaning;
exports.default			= parallel(html, css, js, img, svg, server, watching);
