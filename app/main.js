const { app, BrowserWindow } = require('electron')
const debug = require('electron-debug');

//TODO: 正式环境要去掉
debug();

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // and load the index.html of the app.
  win.loadFile('../dist/index.html');
}

app.on('ready', createWindow);