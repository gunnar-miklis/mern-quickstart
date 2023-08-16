# MERN Quickstart

```
$ mkdir mern-quickstart
```

## client
create project
```
$ yarn create vite client
$ cd client
$ yarn 
```
install packages
```
$ yarn add react react-dom react-router-dom axios 
$ yarn add @mui/material @emotion/react @emotion/styled @mui/icons-material @fontsource/roboto
```
setup eslint: JavaScript modules, browser, JS
```
$ yarn add -D eslint eslint-config-google@latest eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh
$ yarn run eslint --init
```
run client
```
$ yarn dev
```

## server
create project
```
$ npx ironlauncher/@latest server
$ cd server
$ yarn
```
install packages
```
$ yarn add express mongoose dotenv
```
setup eslint: commonJS, node, JSON
```
$ yarn add -D eslint eslint-config-google@latest
$ yarn run eslint --init
```
run server
```
$ yarn dev
````
