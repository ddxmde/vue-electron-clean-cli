const path = require('path')
module.exports = {
    lintOnSave: false,
    publicPath: '/',
    pages: {
        index: {
            entry: 'src/render/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    devServer: {
        proxy: {
            '/wx': {
                target: 'http://192.168.101.24:8088',
                ws: false,
                changeOrigin: true
            }
        }
    },
    chainWebpack: config => {
        config.module
            .rule('js')
            .include
            .add('/src/main')
            .add('/src/render')
            .end()
            .use('babel')
            .loader('babel-loader');
    },
    pluginOptions: { // 第三方插件配置
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [path.resolve(__dirname, './packages/assets/theme/default.less')]
        }
    },
    pluginOptions: {
        electronBuilder: {
            mainProcessFile: 'src/main/main.js',
            mainProcessWatch: [
                'src/main/ipcEvent.js'
            ],
            builderOptions: {
                appId: 'xxx',
                productName: 'xxx',
                copyright: 'xxx',
                win: {
                    icon: './logo.ico',
                    requestedExecutionLevel: 'requireAdministrator',
                    target: [
                        {
                            target: 'nsis',
                            arch: [
                                'x64'
                            ]
                        }
                    ]
                },
                nsis: {
                    oneClick: false,
                    allowElevation: true,
                    allowToChangeInstallationDirectory: true,
                    installerIcon: './logo.ico',
                    uninstallerIcon: './logo.ico',
                    installerHeaderIcon: './logo.ico',
                    createDesktopShortcut: true,
                    createStartMenuShortcut: true,
                    shortcutName: 'TagFile'
                }
            }
        }
    },
    transpileDependencies: [
        'vuetify'
    ]
}
