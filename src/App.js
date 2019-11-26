import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";
import Lyrics from "./components/tracks/Lyrics";

import { Provider } from "./context";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <div className="App">
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Index}></Route>
                 <Route exact path="/lyrics/track/:id" component={Lyrics}></Route>
              </Switch>
            </div>
          </div>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
