import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "./Nav";
import Dashboard from "./Dashboard";
import AddLocation from "./AddLocation";
import { CityContext } from "./Context";

function App() {
  const [city, setCity] = useState(localStorage.getItem("LONG_LAT"));
  const cities = [
    {
      name: "Delhi",
      country: "India",
      lat: 28.57,
      lon: 77.1,
    },
    {
      name: "NYC",
      country: "USA",
    },
  ];
  localStorage.setItem("SAVED_CITIES_MAUSAM", JSON.stringify(cities));
  return (
    <Router>
      <CityContext.Provider value={{ city, setCity }}>
        <div className="container">
          <Nav />
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/add-location" component={AddLocation} />
        </div>
      </CityContext.Provider>
    </Router>
  );
}

export default App;
