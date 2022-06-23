const path = require('path');
const { App } = require('@wcj/tools-app-main');

(async () => {
  const options = {};
  if (process.env.NODE_ENV === 'development') {
    options.preload = require.resolve('@wcj/tools-app-preload');
    options.webpath = require.resolve('website/build/index.html');
  } else {
    options.preload = path.resolve(__dirname, 'website/index.js');
    options.webpath = 'website/index.html';
  }
  const app = new App();
  await app.createWindow(options);
})();
