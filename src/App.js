import React from 'react';

import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import About from "./pages/About";

import './css/custom.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
    return (
      <React.Fragment>
        <NavigationBar/>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/about">
                <About/>
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
    );
}

export default App;
