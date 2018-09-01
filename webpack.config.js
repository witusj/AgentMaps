const path = require('path');

module.exports = {
	devtool: "eval",
	output: {
		path: path.resolve(__dirname, "site/dist"),
		filename: "agentmaps.js"
	},
	module: {
		rules: [
		    {
		      test: /\.js$/,
		      exclude: /(node_modules|bower_components)/,
		      use: {
			loader: 'babel-loader',
			options: {
			  presets: ['@babel/preset-env']
			}
		      }
		    }
		  ]
		},
	entry: ["@babel/polyfill", path.resolve("src/index.js")]
}