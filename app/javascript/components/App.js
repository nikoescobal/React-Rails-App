import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Greeting from "./Greeting";
import Poop from "./Poop";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Greeting />} />
          <Route path='/poop' element={<Poop />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  greeting: PropTypes.string,
};
export default App;
