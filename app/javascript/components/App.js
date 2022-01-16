import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Greeting from "./Greeting";
import Poop from "./Poop";
import configureStore from "../configureStore";
const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route exact path='/random' element={<Greeting text='hi' />} />
            <Route path='/poop' element={<Poop />} />
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
