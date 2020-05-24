console.log('Hello Electron');
const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");

let win;
console.log(app.getAppPath());
function CreateWindow()
{
    win = new BrowserWindow;
    //win.loadFile('First.html');
    //win.loadURL('https://www.google.com');
    //win.loadURL('file://First.html')
    const newLocal = win.loadURL(url.format({
        pathname: path.join(__dirname, 'First.html'),
        protocol: 'file',
        slashes: true
    }));

    //win.webContents.openDevTools();
    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', CreateWindow);

//Mac Additions
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin')
    {
        app.quit()
    }
});

//For dock initialisation
app.on('activate', () => {
    CreateWindow()
});