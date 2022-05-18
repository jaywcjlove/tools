import webpack, { Configuration } from 'webpack';
import lessModules from '@kkt/less-modules';
import { LoaderConfOptions } from 'kkt';
import pkg from './package.json';

export default (conf: Configuration, env: 'development' | 'production', options: LoaderConfOptions) => {
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
      LOADPATH: JSON.stringify(env === 'production' ? '/tools' : ''),
    }),
  );
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
