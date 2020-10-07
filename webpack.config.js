const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: [
		"@babel/polyfill",
		path.resolve(__dirname, "src", "index.js")
	],
	output: {
		path: path.resolve(__dirname, "public"),
		publicPath: '/',
		filename: "bundle.js",
	},
	devServer: {
		contentBase: path.resolve(__dirname, "public"),
		inline: true,
		hot: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.css$/,
				use: [{ loader: "style-loader" }, { loader: "css-loader" }],
			},
			{
				test: /\.(png|gif|jpe?g|woff|woff2|eot|ttf|svg)$/,
				use: {
					loader: 'url-loader',
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'public/index.html'
		})
	]
}
