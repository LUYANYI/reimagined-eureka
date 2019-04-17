const path = require("path");
module.exports = {
    entry: {
        index: "./src/index.js" //入口文件，若不配置webpack4将自动查找src目录下的index.js文件
    },
    output: {
        filename: "[name].bundle.[hash].js",//输出文件名，[name]表示入口文件js名
        path: path.join(__dirname, "dist")//输出文件路径
    },
	module: { // 处理对应模块
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]//处理css
            }
        ]
    },
}

