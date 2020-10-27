"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
function createWindow() {
    // Create the browser window.
    var win = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    // and load the index.html of the app.
    win.loadFile('./bootstrap/index.html');
}
electron_1.app.on('ready', createWindow);
