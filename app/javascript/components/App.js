import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Greeting from "./Greeting";
import configureStore from "../configureStore";
const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route exact path='/random' element={<Greeting text='hi' />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}

App.propTypes = {
  greeting: PropTypes.string,
};
export default App;
