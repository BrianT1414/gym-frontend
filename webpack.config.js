const webpack = require('webpack'); 
const path = require('path');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';
const randomHash = Math.random().toString(36).substring(7);

module.exports = {
	  devtool: isProd ? 'hidden-source-map' : 'cheap-eval-source-map',
	  mode: isProd ? 'production' : 'development',
	//context: path.join(__dirname, './src'),
	  entry: {
			    bundle: [
						'@babel/polyfill', './src/index'
					]
			  },
	  output: {
			    path: path.resolve(__dirname, './build'),
			    filename: '[name].js',
			    chunkFilename: '[name].bundle.js?ver=[chunkhash]', 
			  },
	  module: {
			    rules: [
						      {
										        test: /\.(js|jsx)$/,
										        loader: 'babel-loader',
										        query: {
															          cacheDirectory: false 
															        },
										      },
						    ],
			  },
	  resolve: {
			    extensions: ['.js', '.jsx'],
			    modules: [
						//					      path.resolve('./src'),
						      path.resolve('./node_modules'),
						      'node_modules'
						    ]
			  },
	  plugins: [
			    new webpack.ProvidePlugin({
						      'fetch': 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
						    }),
			    new webpack.LoaderOptionsPlugin({
						      minimize: true,
						      debug: false
						    }),
			    new webpack.DefinePlugin({
						      'process.env': { 
										        NODE_ENV: JSON.stringify(nodeEnv), 
										      }
						    }),
			  ],
	  watchOptions: {
			    ignored: /node_modules/,
			    poll: 1000
			  }
};

