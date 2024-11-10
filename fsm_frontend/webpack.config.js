const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports =  {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: __dirname + '/dist',
		publicPath: '/dist'
	},
	devtool: 'eval-source-map',
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
				}
			}
		],
	},
	plugins: [new HTMLWebpackPlugin({
		title: "Google Maps Flight Simulator",
		filename: "index.html",
		template: "./src/index.html"
	})]
};


