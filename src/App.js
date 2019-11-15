import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <React.Fragment>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
            <Route exact path="/" component={Index}>

            </Route>


            </Switch>
          </div>
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
