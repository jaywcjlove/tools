import { app, BrowserWindow } from 'electron';

export interface Options extends Electron.BrowserWindowConstructorOptions {
  preload?: string;
  webpath?: string;
}

export class App {
  app = app;
  win?: BrowserWindow;
  isLogin: boolean = false;
  /** 创建主进程窗口 */
  async createWindow(options: Options = {}, loadURL?: string) {
    await app.whenReady();
    this.win = new BrowserWindow({
      titleBarStyle: 'hidden', // 无标题栏
      frame: false, // 创建无边窗口
      width: 800,
      height: 600,
      center: true,
      maximizable: true,
      minimizable: true,
      resizable: true,
      webPreferences: {
        // 多线程
        nodeIntegrationInWorker: true,
        nodeIntegration: true,
        contextIsolation: false,
        preload: options.preload,
      },
      ...options,
    });
    if (process.env.NODE_ENV === 'development') {
      this.win.loadURL(loadURL || 'http://localhost:3000/');
      // 打开开发者工具，默认不打开
      this.win.webContents.openDevTools();
    } else {
      this.win.loadFile(options.webpath);
    }
    return this.win;
  }
}
