let HtmlWebpackPlugin = require('html-webpack-plugin');
let HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
let ZipPlugin = require('zip-webpack-plugin');

module.exports = {
  outputDir: "build",
  assetsDir: "useless_files",   // side effects of html-webpack-inline-source-plugin
  indexPath: "main_files/index.html",
  configureWebpack: {
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',  //template file to embed the source
        inlineSource: '.(js|css)$' // embed all javascript and css inline
      }),
      new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin),

      new ZipPlugin({
        path: 'main_files',
        filename: 'index.html.zip',
        include: [/\.html$/],
      }),
    ]
  }
}