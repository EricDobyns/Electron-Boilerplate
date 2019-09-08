const electron = require('electron')
const { app, dialog } = electron
const { spawn } = require ('child_process');

module.exports = (mainWindow) => {
    return [
        {
            label: '{AppName}',
            submenu: [
                {
                    label: 'About',
                    click: () => {
                        dialog.showErrorBox("Under Construction", "Feature currently only supported on Mac OS")
                    }
                }, 
                {
                    label: 'Check For Updates',
                    click: () => {
                        dialog.showErrorBox("Under Construction", "Feature currently only supported on Mac OS")
                    }
                },                 
                {
                    type: 'separator'
                }, 
                {
                    label: 'Preferences',
                    submenu: [
                        {
                            label: 'Settings'
                        },
                        {
                            type: 'separator'
                        },                         
                        {
                            label: 'Keyboard Shortcuts'
                        },
                        {
                            type: 'separator'
                        },   
                        {
                            label: 'Select Theme'
                        }                                                                    
                    ]
                },                  
                {
                    type: 'separator'
                },     
                {
                    label: 'Services',
                    click: () => {
                        dialog.showErrorBox("Under Construction", "Insert services")
                    }
                },  
                {
                    type: 'separator'
                },                   
                {
                    label: 'Hide',
                    click: () => {
                        dialog.showErrorBox("Under Construction", "Feature currently only supported on Mac OS")
                    }
                },   
                {
                    label: 'Hide Others',
                    click: () => {
                        dialog.showErrorBox("Under Construction", "Feature currently only supported on Mac OS")
                    }
                },   
                {
                    label: 'Show All',
                    click: () => {
                        dialog.showErrorBox("Under Construction", "Feature currently only supported on Mac OS")
                    }
                },                                                      
                {
                    type: 'separator'
                },                                        
                {
                    label: 'Quit',
                    accelerator: 'Cmd+Q',
                    click: () => {
                        app.quit();
                    }
                }
            ]
        },  
        {
            label: 'Debug',
            submenu: [
                {
                    label: 'Toggle Developer Tools',
                    accelerator: 'Cmd+Alt+I',
                    click: () => {
                        mainWindow.webContents.toggleDevTools()
                    }
                }
            ]
        }, 
        {
            label: 'Window',
            submenu: [
                {
                    label: 'Minimize',
                    click: () => {
                        dialog.showErrorBox("Under Construction", "Feature currently only supported on Mac OS")
                    }
                },
                {
                    label: 'Zoom',
                    click: () => {
                        dialog.showErrorBox("Under Construction", "Feature currently only supported on Mac OS")
                    }
                },
                {
                    type: 'separator'
                },  
                {
                    label: 'Bring All To Front',
                    click: () => {
                        dialog.showErrorBox("Under Construction", "Feature currently only supported on Mac OS")
                    }
                }   
            ]
        },
        {
            label: 'Help',
            submenu: [
                {
                    label: 'Documentation',
                    click: () => {
                        dialog.showErrorBox("Under Construction", "Feature currently only supported on Mac OS")
                    }
                }, 
                {
                    label: 'Release Notes',
                    click: () => {
                        dialog.showErrorBox("Under Construction", "Feature currently only supported on Mac OS")
                    }
                },          
                {
                    type: 'separator'
                },    
                {
                    label: 'Keyboard Shortcuts Reference',
                    click: () => {
                        dialog.showErrorBox("Under Construction", "Feature currently only supported on Mac OS")
                    }
                },    
                {
                    label: 'Report Issue',
                    click: () => {
                        dialog.showErrorBox("Under Construction", "Feature currently only supported on Mac OS")
                    }
                },        
                {
                    label: 'View License',
                    click: () => {
                        dialog.showErrorBox("Under Construction", "Feature currently only supported on Mac OS")
                    }
                },   
                {
                    label: 'View Privacy Policy',
                    click: () => {
                        dialog.showErrorBox("Under Construction", "Feature currently only supported on Mac OS")
                    }
                }                                                                                                  
            ]
        },                                      
    ]
}