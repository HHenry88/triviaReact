const webpack = require('webpack');
const path = require('path');
const uglify = require('uglifyjs-webpack-plugin');

const SRC_DIR = path.resolve(__dirname, 'public')
const BUILD_DIR = path.resolve(__dirname, 'dist')

module.exports = {
  entry: path.resolve(SRC_DIR, 'index.jsx'),

	output: {
		filename: 'bundle.js',
		path: BUILD_DIR
	},

	module: {
		rules: [
			{
				test: /\.js|.jsx$/, //only look at js files
				exclude: /node_modules/, //exclude node files
				loader: 'babel-loader', // use babel to use to transpolation
				options: {
					presets: ['es2015', 'react'] //use es2015 and react to change jsx into these.
				}
			}
		]
	},
  node: {
    fs: 'empty',
    tls:'empty',
    net: 'empty'
  },

	plugins: [new uglify()] // squashes everything.
};

//this object tells webpack how to create our bundle
