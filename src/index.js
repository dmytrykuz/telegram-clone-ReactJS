import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "redux/store";
import { userActions } from "redux/actions";

import "./styles/index.sass";
import "emoji-mart/css/emoji-mart.css";

store.dispatch(userActions.fetchUserData());

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
