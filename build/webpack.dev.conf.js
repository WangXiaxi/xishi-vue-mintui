'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

const express = require('express')
const app = express()
var appData = require('../data.json') //加载本地数据文件
var banner = appData.banner //获取对应的本地数据
var news = appData.news //获取对应的本地数据
var ticket = appData.ticket //获取对应的本地数据
var scenicArea = appData.scenicArea //获取对应的本地数据
var strategy = appData.strategy //获取对应的本地数据
var ticketClass = appData.ticketClass //获取对应的本地数据
var apiRoutes = express.Router()
app.use('/api', apiRoutes)

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    },
    before (app) {
      app.get('/api/getBanner', (req, res) => { // 首页轮播
        res.json({
          code: 0,
          msg: 'success',
          data: banner
        })
      }),
      app.get('/api/getHomeNews', (req, res) => { // 新闻推荐
        res.json({
          code: 0,
          msg: 'success',
          data: news
        })
      }),
      app.get('/api/getTicket', (req, res) => { // 门票
        var page = req.query.page - 1,
            limit = req.query.limit,
            curClassId = req.query.curClassId,
            arr = []
        if(curClassId && Number(curClassId) !== 0) {
          ticket.forEach(function(item){
            if (item.ticket_class.indexOf(Number(curClassId)) !== -1) {
              arr.push(item)
            }
          })
        } else {
          arr = ticket
        }
        res.json({
          code: 0,
          msg: 'success',
          data: arr.slice(page*limit, (page+1)*limit)
        })
      }),
      app.get('/api/getScenicArea', (req, res) => { // 景点推荐
        res.json({
          code: 0,
          msg: 'success',
          data: scenicArea
        })
      }),
      app.get('/api/getStrategy', (req, res) => { // 游玩攻略
        var page = req.query.page - 1,
            limit = req.query.limit
        res.json({
          code: 0,
          msg: 'success',
          data: strategy.slice(page*limit, (page+1)*limit)
        })
      }),
      app.get('/api/getTicketClass', (req, res) => { // 获取门票分类
        res.json({
          code: 0,
          msg: 'success',
          data: ticketClass
        })
      })
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
