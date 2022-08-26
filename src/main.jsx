import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { logger } from "./middlewares/index";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { library } from "@fortawesome/fontawesome-svg-core";

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarReg } from "@fortawesome/free-regular-svg-icons";
import rootReducer from "./reducers/rootReducer";

library.add(faStar, faStarReg);

const middlewareEnhancer = applyMiddleware(thunk);

const store = createStore(rootReducer, composeWithDevTools(middlewareEnhancer));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
