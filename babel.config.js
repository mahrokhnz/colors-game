module.exports = function (api) {
	api.cache(true);

	return {
		presets: [
			['@babel/preset-env'],
			['@babel/preset-react', {runtime: 'automatic'}],
			['@babel/preset-typescript',]
		],
		plugins: [
			['module-resolver', {
				root: ['./src'],
				alias: {
					src: './src',
				},
			}]
		],
	};
};