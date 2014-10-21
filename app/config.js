/*global requirejs, require, beta*/


if (typeof window.define !== "function") {
		try {
			window.define = beta.define;
		} catch(e) {
		
		}
}
console.log('a');
requirejs.config({
	baseUrl: '/',
	paths: {
		'jquery': 'node_modules/jquery/dist/jquery',
		'modernizr': 'app/libs/window.modernizr',
		'lodash': 'node_modules/lodash/dist/lodash',
		'reqwest': 'node_modules/reqwest/reqwest',
		'es5-shim': 'node_modules/es5-shim/es5-shim',
		'es5-sham': 'node_modules/es5-shim/es5-sham',
		'q': 'node_modules/q/q',
		'react': 'node_modules/react/dist/react',
		'director': 'node_modules/director/build/director',
		'superagent': 'node_modules/superagent/superagent',
		'ignore': 'app/utils/ignore'
	},
	deps: [
		'es5-shim',
		'es5-sham'
	],
	shim: {
		'director': {
			exports: 'Router'
		}
	},
	map: {
		'*': {
			'underscore': 'lodash',
			'node-cache': 'ignore',
			'amd-loader': 'ignore',
			'request': 'ignore'
		}
	},
	packages: [
	]
});

//>>excludeStart("buildExclude", pragmas.buildExclude);
require(['app/entry']);
//>>excludeEnd("buildExclude");
