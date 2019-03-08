const path = require('path');

// 热更新第二部
const webpack = require('webpack');

const htmlWebpackPlugin = require('html-webpack-plugin');

const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
	entry:path.resolve(__dirname,'src/main.js'),//项目入口文件
	output:{//配置输出选项
		path:path.resolve(__dirname,'dist'),//配置输出路径
		filename:'bundle.js' //配置输出的文件名
	},
	devServer:{
		open:true,
		port:9527,
		contentBase:'src',
		hot:true
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin(),

		new htmlWebpackPlugin({
			template:path.join(__dirname,'./src/index.html'),
			filename:'index.html'
		}),
		new VueLoaderPlugin()
	],
	module:{
		rules:[
			{test:/\.css$/,use:['style-loader','css-loader']},
			{test:/\.less$/,use:['style-loader','css-loader','less-loader']},
			{test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
			// 默认图片显示为base64
			// {test:/\.(jpg|png|jpeg|svg|bmp|gif$)/,use:['url-loader']}
			{test:/\.(jpg|png|jpeg|svg|bmp|gif$)/,use:['url-loader?limit=3000&name=[hash:8]--[name].[ext]']},
			{test:/\.vue$/,use:'vue-loader'}
		]
	}
}