import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { allReducers } from "./reducers/reducers";
import App from "./App";
import { createStore } from "redux";
import "./index.css";

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
