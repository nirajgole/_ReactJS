import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//put this inside package.json --> scripts
// "start:dev": "concurrently \"npm start\" \"npm run json-server\"",
// "json-server": "json-server --watch db.json --port 3003",
// "homepage": "https://nirajgole.github.io/REACT-CRUD-APP",
