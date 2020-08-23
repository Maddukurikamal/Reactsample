import React from "react";
import "./Login.css";
import Login from "./Login";
import Users from "./Users";

import Home from "./Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

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
              <Route exact path="/dashboard" component={Dashboard} />

              <Route path="/dashboard/:id" component={Users} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
