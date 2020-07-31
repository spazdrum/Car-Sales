<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { reducer } from './Reducers/reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(reducer);

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}> <App /> </Provider>, rootElement);
=======
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { carReducer } from "./reducers/reducer";

import "bulma/css/bulma.css";
import "./styles.scss";

const store = createStore(carReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
>>>>>>> bd233f8d2f95428e6227d512b5cc8cb6788e7a8e
