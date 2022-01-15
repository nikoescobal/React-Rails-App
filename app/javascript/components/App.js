import React from "react";
import { Provider } from "react-redux";
import Greeting from "./Greeting";
import store from "../store";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Greeting />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
};

export default Main;
