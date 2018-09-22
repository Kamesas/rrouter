import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";

function testReducer(state = {}, action) {
  switch (action.type) {
    case "ADD_NOTE":
      return [...state, action.payload];
    case "ADD_TASK":
      return [...state, action.payload];
    case "COUNT_UP":
      return [...state, "plus"];

    default:
      return [...state];
  }
}

const store = createStore(testReducer);

store.dispatch({
  type: "ADD_NOTE",
  payload: "two"
});

console.log("index --- ", store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
