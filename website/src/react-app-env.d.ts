/// <reference types="react-scripts" />

declare module '*.module.less' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

/** ⚠️ Solve the problem of internationalization of app development. */
declare var ELECTRON: string;
/**
 * path where resources get loaded from, or a function
 * returning a path:
 * function(lngs, namespaces) { return customPath; }
 * the returned path will interpolate lng, ns if provided like giving a static path
 * the function might return a promise
 * returning falsy will abort the download
 * https://github.com/i18next/i18next-http-backend#backend-options
 */
declare var LOADPATH: string;
declare var DEBUG: 'development' | 'production';
declare var VERSION: string;
