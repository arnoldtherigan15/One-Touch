const path = require("path")

module.exports = {
    chainWebpack: config => {
        config
        .plugin('html')
        .tap(args => {
          args[0].title = 'One Touch'
          return args
        })
    },
    lintOnSave:true,
    pluginOptions: {
        "style-resources-loader": {
          preProcessor: "scss",
          patterns: [path.resolve(__dirname, "./src/styles/global.scss")]
        }
    }
}