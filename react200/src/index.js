import React from "react";
import ReactDOM from "react-dom";
import './index.css'
import App from './App';
import {configureStore} from 'redux';
import reducers from './reducers';


const store = configureStore(reducers);

const listener = () => {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  ) 
}

store.subscribe(listener);
listener();


