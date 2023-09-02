# MERN Quickstart

```bash
$ mkdir mern-quickstart
```

## client
create project
```bash
$ yarn create vite client
$ cd client
$ yarn 
```
install packages
```bash
$ yarn add react react-dom react-router-dom axios 
$ yarn add @mui/material @emotion/react @emotion/styled @mui/icons-material @fontsource/roboto
```
setup eslint: JavaScript modules, browser, JS
```bash
$ yarn add -D eslint eslint-config-google@latest eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh
$ yarn run eslint --init
```
run client
```bash
$ yarn dev
```

## server
create project
```bash
$ npx ironlauncher/@latest server
$ cd server
$ yarn
```
install packages
```bash
$ yarn add express mongoose dotenv
```
setup eslint: commonJS, node, JSON
```bash
$ yarn add -D eslint eslint-config-google@latest
$ yarn run eslint --init
```
run server
```bash
$ yarn dev
````
