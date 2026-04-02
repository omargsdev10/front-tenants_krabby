const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');

module.exports = {
  mode: 'development',
  // SECCIÓN CRÍTICA AÑADIDA:
  output: {
    publicPath: 'http://localhost:3001/', // Esto le dice al navegador: "busca mis archivos en el 3001"
  },
  devServer: {
    port: 3001,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        //options: { presets: ['@babel/preset-react', '@babel/preset-env'] },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mfe_tenants',
      filename: 'remoteEntry.js',
      exposes: {
        './TenantsIndex': './src/TenantsApp',
      },
      shared: {
        react: { singleton: true, requiredVersion: '^18.0.0' },
        'react-dom': { singleton: true, requiredVersion: '^18.0.0' },
      },
    }),
    new HtmlWebpackPlugin({ 
        template: './public/index.html',
        inject: 'body',
        scriptLoading: 'blocking'
    }),
  ],
  resolve: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
};