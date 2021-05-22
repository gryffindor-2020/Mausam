import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./Nav";
import Dashboard from "./Dashboard";

function App() {
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
