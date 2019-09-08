# Titan HST - Admin Client
Electron & React 16 & Webpack 4 template for a quick development and prototyping

## Getting Started
``` bash
# Install Dependencies
$ npm i

# Run this command to start developing with hot reloading
$ npm start
```

## Package
Generate applications for mac, windows, linux (useful for testing)
``` bash
$ npm run package
```

## Distribute
Generate production installers for mac, windows, linux 
``` bash
$ npm run dist
```

## Folder structure
```
Titan HST - Admin Client

    ├── main_process.js/
    ├── main_menu.js/
    ├── app/

        ├── build/                      # Webpack 4 will manage this folder for you
            ├── bundle.css              # Bundled CSS
            ├── bundle.js               # Bundled JS
            ├── ...                     # Your images will be copied here

        ├── src/

            ├── assets/                 # Images
                ├── electron.png
                ├── react.png
                ├── webpack.png

            ├── components/             # React Components
                ├── Link/               # To keep them modularized follow this structure:
                    ├── index.jsx       # Your component's React code
                    ├── styles.css      # Your component's scoped CSS
                ├── Logo/
                    ├── index.jsx
                    ├── styles.css

            ├── containers/             # React Containers
                ├── Link/               # To keep them modularized follow this structure:
                    ├── index.jsx       # Your component's React code
                    ├── styles.css      # Your component's scoped CSS
                ├── Logo/
                    ├── index.jsx
                    ├── styles.css                    

            ├── App.jsx                 # React main component where everything is tied up
            ├── renderer_process.js     # Electron's renderer-process, where you React app is called.
            ├── global.css              # Global CSS and global constants go here

        ├── index.html                  # This HTML only uses build/ folder's files

    ├── main_process.js                 # Electron's main process. App is launched from here
    ├── package.json
    ├── webpack.config.js               # Webpack 4 setup
```