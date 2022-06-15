import webpack, { Configuration } from 'webpack';
import lessModules from '@kkt/less-modules';
import { disableScopePlugin } from '@kkt/scope-plugin-options';
import { LoaderConfOptions } from 'kkt';
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import pkg from './package.json';

export default (conf: Configuration, env: 'development' | 'production', options: LoaderConfOptions) => {
  let LOADPATH = env === 'production' ? '/tools' : '';
  if (process.env.DOCKER === 'true') {
    LOADPATH = '';
  }
  conf = disableScopePlugin(conf);
  conf = lessModules(conf, env, options);
  // Get the project version.
  conf.plugins!.push(
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(pkg.version),
      /**
       * path where resources get loaded from, or a function
       * returning a path:
       * function(lngs, namespaces) { return customPath; }
       * the returned path will interpolate lng, ns if provided like giving a static path
       * the function might return a promise
       * returning falsy will abort the download
       * https://github.com/i18next/i18next-http-backend#backend-options
       */
      LOADPATH: JSON.stringify(LOADPATH),
      DEBUG: JSON.stringify(LOADPATH),
      /** ⚠️ Solve the problem of internationalization of app development. */
      ELECTRON: JSON.stringify(process.env.ELECTRON),
    }),
  );
  if (env === 'development') {
    // conf.plugins!.push(new BundleAnalyzerPlugin());
  }
  conf.plugins!.push(
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  );
  conf.resolve!.alias = {
    ...conf.resolve!.alias,
    process: 'process/browser',
    path: 'path',
    // path: 'path-browserify',
    'uglify-js': 'uglify-js-export',
  };
  conf.resolve!.fallback = {
    fs: false,
    url: false,
    path: false,
    http: false,
    https: false,
    process: false,
    os: false,
  };
  if (env === 'production') {
    conf.output = { ...conf.output, publicPath: './' };
    conf.optimization = {
      ...conf.optimization,
      splitChunks: {
        cacheGroups: {
          reactvendor: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'react-vendor',
            chunks: 'all',
          },
        },
      },
    };
  }
  return conf;
};
