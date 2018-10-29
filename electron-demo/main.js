const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

// defining global variable for window. Keeps the window from closing on
//JS garbage collect
let win;

function createWindow(){
    //Create browser window
    win = new BrowserWindow({width: 800, height: 600})


    //Load index.html
    win.loadFile("index.html")


 //Open devtools 
win.webContents.openDevTools()

win.on('closed', () =>{
    win = null
})
}

//Run create window funtion
app.on('ready', createWindow)

//Quit when all windows are closed
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit()
    }
})
