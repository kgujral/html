var gulp = require('gulp'),
	minifycss = require('gulp-minify-css'),
	concat = require('gulp-concat'),
	uglify = require('gulp-ngmin'),
	streamqueue = require('streamqueue'),
	clean = require('gulp-clean'),
	jshint = require('gulp-jshint'),
	stylish = require('jshint-stylish'),
	templateCache = require('gulp-angular-templatecache');

var options = new function() {
	this.PARTIALS_SRC = 'js/**/*.tpl',
	this.FONTS_SRC = 'app/fonts/**/*',
	this.IMAGES_SRC = 'app/img/**/*',
	this.JS_SRC = ['js/**/*.js'],      // 0 index must be vendor libs for convention sake
	this.CSS_SRC = ['css/**/*.css'], // 0 index must be vendor libs for convention sake

	this.DIST_SRC = 'dist',
	
	this.PARTIALS_DEST = this.DIST_SRC + '/js',
	this.FONTS_DEST = this.DIST_SRC + '/fonts',
	this.IMAGES_DEST = this.DIST_SRC + '/img',
	this.JS_DEST = this.DIST_SRC + '/js',
	this.CSS_DEST = this.DIST_SRC + '/css'
};

gulp.task('template-cache', function () {
	return gulp.src(options.PARTIALS_SRC)
		.pipe(templateCache('templates.js', {module: 'app'}))
		.pipe(gulp.dest(options.PARTIALS_DEST));
});

gulp.task('fonts', function() {
	return gulp.src(options.FONTS_SRC)
		.pipe(gulp.dest(options.FONTS_DEST));
});

gulp.task('imgs', function() {
	return gulp.src(options.IMAGES_SRC)
		.pipe(gulp.dest(options.IMAGES_DEST));
});

gulp.task('jshint', function() {
	return gulp.src(options.JS_SRC.concat( '!' + options.JS_SRC[0] ))
		.pipe(jshint( {globals:{angular: true}} ))
		.pipe(jshint.reporter(stylish));
});

gulp.task('js', ['jshint'], function() {
	return gulp.src(options.JS_SRC)
		.pipe(concat('app.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest(options.JS_DEST));
});

gulp.task('css', function() {
	return gulp.src(options.CSS_SRC)
		.pipe(concat('app.min.css'))
		.pipe(minifycss())
		.pipe(gulp.dest(options.CSS_DEST));
});

gulp.task('clean', function() {
	return gulp.src([options.DIST_SRC + '/*'], {read: false})
		.pipe(clean( {force: true} ));
});

gulp.task('default', ['fonts', 'imgs', 'js', 'css', 'template-cache'], function() {

	gulp.watch(options.FONTS_SRC, ['fonts']);
	gulp.watch(options.IMAGES_SRC, ['imgs']);
	gulp.watch(options.JS_SRC, ['js']);
	gulp.watch(options.CSS_SRC, ['css']);
	gulp.watch(options.PARTIALS_SRC, ['template-cache']);

});