const path = require('path');
const resolve = function (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    devServer: {
        open: true,
        proxy: {
            // detail: https://cli.vuejs.org/config/#devserver-proxy
            ['/']: {
                target: `http://localhost:3000`,
            }
        },
    },
        configureWebpack: {
            resolve: {
                alias: {
                    '@': resolve('src')
                }
            }
        },
    }
