var webpack = require("webpack");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
//var WebpackDevServer = require('webpack-dev-server');
module.exports = {
	entry: [
		"webpack-dev-server/client?http://localhost:8080/",
		"./src/index.js",
		"./src/recent.js",
		"./src/js/register.js",
		"./src/js/login.js"
	],
	output: {
		path: __dirname + "/dist/",
		filename: "bundle.js"
	},
	devServer:{
		historyApiFallback:true,
		hot:true,
		inline:true,
		//progress:true,//报错无法识别，删除后也能正常刷新
	},
	plugins: [
	    new webpack.HotModuleReplacementPlugin(),
	    new OpenBrowserPlugin(
	    	{ 
	    		url: 'http://localhost:8080' 
	    	}
	    ),
	    new webpack.ProvidePlugin({
            $: 'jquery'
        })
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				loader: "style-loader!css-loader",
			},
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: /node_modules/,
				query: {
					"presets": ["es2015"]
				}
			},
			{
				test: /\.less$/,
				loader: "style-loader!css-loader!less-loader",
			},
			{
				test: /\.(png|jpg|gif|svg)$/i,
				loaders: [
					'url-loader?limit=1000&name=img/[name]-[hash:5].[ext]',
					'image-webpack-loader'
				]
			}
		]
	},
	// externals: {
	// 	jquery: "window.$"
	// }
}