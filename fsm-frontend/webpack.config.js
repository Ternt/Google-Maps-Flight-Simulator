const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env) => {
	const PATHS = {
		src: path.join(__dirname, 'src/'),
		dist: path.join(__dirname, 'dist/'),
	}

	const config = {
		entry: PATHS.src + '/index.js',
		plugins: [
			new HTMLWebpackPlugin({
				title: 'Google Maps Flight Simulator',
				filename: 'index.html',
				template: PATHS.src + 'index.html'
			}),
		],
		output: {
			path: PATHS.dist,
			filename: 'main.js',
			clean: true,
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env']
						}
					},
				},
			],
		},
	}

	if (env.mode === 'production') {
		config.mode = env.mode;
		config.devtool = false;
	}

	if (env.mode === 'development') {
		config.mode = env.mode;
		config.devtool = 'source-map';
	}

	return config;
}
