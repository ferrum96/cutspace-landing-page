let mix = require('laravel-mix');

mix.js('./src/js/app.js', 'prod/js')
	.sass('./src/sass/main.scss', 'prod/styles');