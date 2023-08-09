module.exports = {
  entry: './js/app.js',
  mode: 'development', // the terminal gave an error b/c this was missing. It was commented out below during tutorial. Added back temorarily until the following are uncommented, then this can be deleted.

  // devtool: 'inline-source-map',
  // mode: 'development',
  // module: {
  //   rules: [
  //     {
  //       test: /\.tsx?$/,
  //       use: 'ts-loader',
  //       exclude: /node_modules/
  //     }
  //   ]
  // },
  // resolve: {
  //   extensions: [ '.tsx', '.ts', '.js' ]
  // },
  // output: {
  //   filename: 'bundle.js'
  // },
  devServer: {
    inline: true
  }
};
