const { app, BrowserWindow} = require('electron');
const path = require('path');

const Store = require('electron-store');
Store.initRenderer();

function createWindow(){
    const win = new BrowserWindow({
        icon: path.join(__dirname, 'public/favicon.png'),
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        }
    });

    win.setIcon('public/favicon.png');
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