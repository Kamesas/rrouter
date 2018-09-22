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
      return state.count + 1;

    default:
      return [...state];
  }
}

const store = createStore(
  testReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
