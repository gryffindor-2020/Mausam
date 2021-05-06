import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Nav from "./Nav";
import Dashboard from "./Dashboard";

function App() {
  // const API_KEY = "5f38a955153345aebbc145451200410";
  // const API_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;

  return (
    <Router>
      <div className="container">
        <Nav />
        <Dashboard />
      </div>
    </Router>
  );
}

export default App;
