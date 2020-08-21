import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from './pages/Contact';

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
            <Route path="/contact">
                <Contact/>
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
    );
}

export default App;
