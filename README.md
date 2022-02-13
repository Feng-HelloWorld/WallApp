# WallApp

You could try the app here: http://35.239.212.171 . It's a simple server only for test use.

### Requirements
  - sqlite3 version >= 3.9.0
  - python3 version >= 3.6.8

For React Server, make sure you have installed the following package:
  - yarn add axios
  - yarn add jwt-decode
  - yarn add react-router-dom

### Notice
  - Remember to change axios base url in file /ReactServer/App.js to your actual backend address when deployed.

### To start React Server
1. Run 'yarn start' under the folder WallApp/ReactServer/
2. Or run 'yarn build' under the same folder, then load the files under the folder WallApp/ReactServer/build/ to a nginx server.

### To start Django Server
1. Run './launch.sh' under the folder WallApp/DjangoServer/. You may need use sudo to install some dependences.