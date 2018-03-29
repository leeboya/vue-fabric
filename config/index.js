
'use strict'
// Template version: 1.1.3
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  build: {
    testEnv: require('./test.env'),
    simEnv: require('./sim.env'),
    prodEnv: require('./prod.env'),
    envEnv: require('./env.env'),
    // env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
    productionSourceMap: false,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: true,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: process.env.PORT || 9090,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
    	 '/designer/getDesignerByUid': {
        // target: 'http://120.27.215.62:8420/',
        target: 'http://192.168.14.175:8420/', //赵玉
        changeOrigin: true,
      
      },
      '/boards': {
        target: 'http://192.168.3.249:8904/', //赵玉
        changeOrigin: true,
      
      },
      '/boards/shared': {
        target: 'http://192.168.3.249:8904/', //赵玉
        changeOrigin: true,
      
      },
      '/boards/unshared': {
        target: 'http://192.168.3.249:8904/', //赵玉
        changeOrigin: true,
      
      },
      '/boards/images/isPrimary': {
        target: 'http://192.168.3.249:8904/', //赵玉
        changeOrigin: true,
      
      },
      '/boards/images': {
        target: 'http://192.168.3.249:8904/', //赵玉
        changeOrigin: true,
      
      },
      '/api/v1/user/info/register': {
        target: 'http://192.168.14.174:8999/', 
        changeOrigin: true,
      
      },
    	'/api/v1/user/info/login': {
        target: 'http://192.168.14.174:8999/', 
        changeOrigin: true,
      
      },
      '/api/v1/user/info/smsSend': {
        target: 'http://192.168.14.174:8999/', 
        changeOrigin: true,
      
      },
      '/api/v1/user/info/bindPhone': {
        target: 'http://192.168.14.174:8999/', 
        changeOrigin: true,
      
      },
      "/api/v1/user/info/update": {
        target: 'http://192.168.14.174:8999/', 
        changeOrigin: true,
      
      },
      '/api/v1/user/info/': {
        target: 'http://192.168.14.174:8999/', 
        changeOrigin: true,
      
      },
      '/api/v1/tuku/palettes/palette': {
        target: 'http://192.168.2.137:8999/', 
        changeOrigin: true,
      },
      '/api/v1/tuku/palettes/00001/palette': {
        target: 'http://192.168.2.137:8999/', 
        changeOrigin: true,
      },
      '/api/v1/tuku/palettes/save': {
        target: 'http://192.168.2.137:8999/', 
        changeOrigin: true,
      },

      '/api/v1/tuku/palettes/978898061348118530': {
        target: 'http://192.168.2.137:8999/', 
        changeOrigin: true,
      },
      '/api/v1/tuku/palettes/978901410936070145': {
        target: 'http://192.168.2.137:8999/', 
        changeOrigin: true,
      },
      '/api/v1/tuku/palette/palettes/978901402518102018': {
        target: 'http://192.168.2.137:8999/', 
        changeOrigin: true,
      },
      '/api/v1/tuku/palettes/caseMongoDO/978904609705238530': {
        target: 'http://192.168.2.137:8999/', 
        changeOrigin: true,
      },

      '/api/v1/core/upload/genUpToken/': {
        target: 'http://192.168.14.174:8999/', 
        changeOrigin: true,
      
      },
      '/api/v1/tuku/item': {
        target: 'http://192.168.14.174:8999/', 
        changeOrigin: true,
      
      },
      '/api/v1/tuku/categories': {
        target: 'http://192.168.14.174:8999/', 
        changeOrigin: true,
      
      },

    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
