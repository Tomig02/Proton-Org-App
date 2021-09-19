const { app, BrowserWindow } = require('electron');
const path = require('path');
const Store = require('electron-store');
Store.initRenderer();

try {
    require('electron-reloader')(module);
} catch (_) {}

function createWindow(){
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            // preload: path.join(__dirname, 'preload.js')
        }
    });

    win.loadFile('build/index.html');
}

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
});

app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', function () {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
});