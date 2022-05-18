import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import reducerPost from "./redux/post.jsx";

const store = configureStore({
  reducer: {
    post: reducerPost,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
