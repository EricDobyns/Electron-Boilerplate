const electron = require('electron')
const { app, BrowserWindow, Menu, globalShortcut, session } = electron
const Main_Menu = require('./main_menu.js')

let mainWindow

app.on('ready', () => {

    // Create Main Window
    mainWindow = new BrowserWindow({
        width: 800, 
        height: 600, 
        resizable: true
    })

    // Add Global Hot Keys
    globalShortcut.register('CommandOrControl+R', function() {
		mainWindow.reload()
	})

    // Load Main Window
    mainWindow.loadURL(`file://${__dirname}/app/index.html`)
    
    // Configure Menu
    const menu = Menu.buildFromTemplate(Main_Menu(mainWindow));
    Menu.setApplicationMenu(menu);
})
