import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Search} />
          <Route path="/saved" component={Saved} />
          <Route render={() => <Redirect to="/"/>} />
        </Switch>
      </Router>
    );
  }
}

export default App;
