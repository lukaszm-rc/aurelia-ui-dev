var gulp = require('gulp');
var bundle = require('aurelia-bundler').bundle;

var config = {
	force: true,
	baseURL: '.',                   // baseURL of the application
	configPath: './config.js',      // config.js file. Must be within `baseURL`
	bundles: {
		"dist/demo/app-build": {           // bundle name/path. Must be within `baseURL`. Final path is: `baseURL/dist/app-build.js`.
			includes: [
				'[demo/*.js]',
				'demo.html!text',
				'demo/*.html!text',
				'demo/*.css!text'
			],
			excludes: [
				'core-js',
				'github:jspm/nodelibs-process'
			],
			options: {
				inject: true,
				minify: true,
				rev: false
			}
		},
		"dist/demo/vendor-build": {
			includes: [
				'aurelia-bootstrapper',
				'aurelia-animator-css',
				'aurelia-*',
				'jquery'
			],
			options: {
				inject: true,
				minify: true
			}
		},
		"dist/system/vendor-build": {
			includes: [
				'aurelia-bootstrapper',
				'aurelia-animator-css',
				'aurelia-*',
				'aurelia-http-client',
				'jquery'
			],
			options: {
				inject: true,
				minify: true
			}
		}
	}
};

gulp.task('bundle', function() {
	return bundle(config);
});

