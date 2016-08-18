module.exports = {
	entry: './main.js',
	outpur: {
		path: './',
		filename: 'bundle.js'
	},
	devServer: {
		inline: true,
		port : 1234
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader : 'babel',
				query: {
					"presets": ["es2015","react"]
				}
			}
		]
	}
}