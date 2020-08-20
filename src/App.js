import React from "react";
import "./Login.css";
import Login from "./Login";

import Home from "./Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//import UserData from "./UserData";
import "./App.css";

//import UserData from "./UserData";
import Repo from "./Dashboard";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/User" component={Dashboard} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
