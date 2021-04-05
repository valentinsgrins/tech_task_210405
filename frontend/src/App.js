import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component"
import UsersList from "./components/users-list.component";
import CreateUser from "./components/create-user.component";
import Other from "./components/other.component";

function App() {
  return ( 
    <Router>
  <div className = "container" >
  <Navbar />
        <br/>
        <Switch>
        <Route path="/" exact component={UsersList} />
        <Route path="/user" component={CreateUser} />
        <Route component={Other} />
        </Switch>
    </div>
    </Router>
  );
}

export default App;