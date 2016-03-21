Package.describe({
  name: 'sass-test',
  version: '0.0.1',
});

Package.onUse(function(api) {
  api.versionsFrom('1.3-rc.4');
  api.use('ecmascript');
  api.use('isobuild:compiler-plugin@1.0.0');
});

Package.registerBuildPlugin({
	name: 'scss-build-plugin',
	use: [
		'ecmascript',
	],
	npmDependencies: {
		"node-sass": "3.4.2",
	},
	sources: [
		'sass-test.js'
	]
});
