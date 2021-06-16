import React from 'react';
import ReactDOM from 'react-dom';
// import Navigation from './components/Navigation';
import Routes from './components/Routes';
// import App from './components/App';
import './App.css';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Navigation /> */}
    <Routes />
  </React.StrictMode>,
  document.getElementById('root'),
);
