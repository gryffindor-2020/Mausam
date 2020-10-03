import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import Nav from "./Nav";
import Dashboard from "./Dashboard";
import AddLocation from "./AddLocation";
function App() {
  return (
    <Router>
      <div className="container">
      <Nav/>
      <Route exact path="/" component={Dashboard}/>
      <Route exact path="/dashboard" component={Dashboard}/>
      <Route exact path="/add-location" component={AddLocation}/>
    </div>
    </Router>
    
  );
}

export default App;
