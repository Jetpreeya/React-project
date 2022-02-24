import React from 'react';
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './component/context';


ReactDOM.render(
  <BrowserRouter>
  <AppProvider>
    <App />
    </AppProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();