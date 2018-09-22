import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";

function testReducer(state = ["one"], action) {
  switch (action.type) {
    case "ADD_NOTE":
      return [...state, action.payload];

    default:
      return [...state];
  }
}

const store = createStore(testReducer);

store.dispatch({
  type: "ADD_NOTE",
  payload: "two"
});

console.log("index ---", store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
