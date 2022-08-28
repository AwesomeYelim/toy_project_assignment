import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";

const store = createStore(reducers);

const listener = () => {
  ReactDOM.render(
    <Provider>
      <App store={store} />
    </Provider>,
    document.getElementById("root")
  );
};

store.subscribe(listener);
listener();
