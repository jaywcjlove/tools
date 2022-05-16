import webpack, { Configuration } from "webpack";
import lessModules from "@kkt/less-modules";
import { LoaderConfOptions } from "kkt";
import pkg from "./package.json";

export default (
  conf: Configuration,
  env: "development" | "production",
  options: LoaderConfOptions
) => {
  conf = lessModules(conf, env, options);
  // Get the project version.
  conf.plugins!.push(
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(pkg.version),
    })
  );
  if (env === "production") {
    conf.output = { ...conf.output, publicPath: "./" };
    conf.optimization = {
      ...conf.optimization,
      splitChunks: {
        cacheGroups: {
          reactvendor: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: "react-vendor",
            chunks: "all",
          },
        },
      },
    };
  }
  return conf;
};
