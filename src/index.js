import React from "react";
import ReactDOM from "react-dom/client"; // ✅ React 18

import App from "./components/App";
import { Provider } from "react-redux";
import store from "../store"; // or correct path to your store.js

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
