module.exports = {
    publicPath: '/',
    chainWebpack: config => {
        const svgRule = config.module.rule('svg')
        svgRule.uses.clear()
        svgRule.use('vue-svg-loader').loader('vue-svg-loader')
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'CV'
                return args
            })
        config.resolve.symlinks(false)
    },
    devServer: {
        port: 8081
    }
}
