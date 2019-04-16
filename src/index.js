import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Counter from "./counter";
import reducer from "./reducer";
import "./styles.css";
const store = createStore(reducer);
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
