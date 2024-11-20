const HTMLWebpackPlugin = require('html-webpack-plugin');
const WebpackStringReplacer = require('webpack-string-replacer');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
require('dotenv').config();

module.exports = (env) => {
	const DEFAULT_WEBPACK_PORT = 3000;
	const PATHS = {
		src: path.join(__dirname, 'src/'),
		dist: path.join(__dirname, 'dist/'),
		ug_assets: path.join(__dirname, '../node_modules/@jdultra/ultra-globe/dist/assets'),
	}

	const config = {
		entry: PATHS.src + '/index.js',
		plugins: [
			new HTMLWebpackPlugin({
				title: 'Google Maps Flight Simulator',
				filename: 'index.html',
				template: 'index.html'
			}),
			new WebpackStringReplacer(
				{
					rules: [{
						fileInclude: "index.js",
						replacement: {
							pattern: '@@API_KEY',
							patternMatchCount: {max: 1},
							replacement: process.env.GOOGLE_API_KEY,
						}
					}]
				},
			),
			new CopyPlugin({
				patterns: [
					{
						from: PATHS.ug_assets,
						to: PATHS.dist + 'assets',
					}
					// Add other asset directories if needed
				],
			})
		],
		output: {
			path: PATHS.dist,
			filename: 'main.js',
			clean: true,
			assetModuleFilename: 'assets/[hash][ext][query]',
		},
		devServer: {
			hot: true,
			open: true,
			port: DEFAULT_WEBPACK_PORT,
			static: {
				directory: PATHS.dist,
			},
			client: {
				logging: 'error', // Only log errors (no warnings or info)
			},
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
				{
					test: /\.(eot|woff|woff2|otf|ttf|svg)$/,
					use: [{
						loader: "asset/resource",
						options: {
							name: "fonts/[name].[ext]"
						}
					}]
				},
				{
					test: /\.glsl$/,
					loader: 'webpack-glsl-loader'
				},

				{
					test: /\.(png|svg|jpg|jpeg|gif|bin)$/i,
					type: 'asset',
					parser: {
						dataUrlCondition: {
							maxSize: 8 * 1024, // 8 KB
						},
					},
					generator: {
						filename: 'assets/[hash][ext][query]',
					},
				},
				{
					test: /\.(glb|gltf|obj)$/i,
					type: 'asset',
					generator: {
						filename: 'assets/[hash][ext][query]',
					},
				},
				{
					test: /\.wasm$/,
					type: "webassembly/async",
				},
				{
					test: /\.worker\.js$/,
					loader: "worker-loader",
					options: {
						filename: "[name].js",
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

	else {
		config.mode = 'development';
		config.devtool = 'source-map';
	}

	return config;
}
