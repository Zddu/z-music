module.exports={
    devServer:{
        open:true
    },
    configureWebpack:{
        module: { // 配置所有第三方loader 模块的
            rules: [
                { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }, // 处理 字体文件的 loader
            ]
        }
    }
}
