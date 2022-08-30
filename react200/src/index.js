import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";

const CallMiddleware = (store) => (nextMiddle) => (action) => {
  console.log("1. reducer 실행 전");
  console.log(
    "2. action.type : " +
      action.type +
      ", store str :" +
      store.getState().data.str
  );
  let result = nextMiddle(action);
  console.log("3. reducer 실행 후");
  console.log(
    "4. action.type : " +
      action.type +
      ", store str :" +
      store.getState().data.str
  );

  return result;
};

const store = createStore(reducers, applyMiddleware(CallMiddleware));

const listener = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App indexProps="react" />
    </Provider>,
    document.getElementById("root")
  );
};

store.subscribe(listener);
listener();

