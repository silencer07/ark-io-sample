import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {RouteComponentProps} from "react-router";
import Routes from "./routes";
import {BrowserRouter} from "react-router-dom";

const routes: React.ComponentType<RouteComponentProps<any>> = Routes;

ReactDOM.render(
  <React.StrictMode>
    <App router={BrowserRouter} routes={routes} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
