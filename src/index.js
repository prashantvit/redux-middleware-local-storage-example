import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promiseMidlleware from "redux-promise-middleware";
import localStorageMiddleware, { applySession } from "./sessionMiddleware";
import Counter from "./counter";
import reducer from "./reducer";
import "./styles.css";
const store = createStore(
  ...applySession(
    reducer,
    applyMiddleware(promiseMidlleware, localStorageMiddleware)
  )
);
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
