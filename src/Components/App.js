import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

import Nav from "./Nav";
import Dashboard from "./Dashboard";
import { CurrentCityContext, CityDataContext } from "./Context";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [city, setCity] = useState("Delhi");
  const [cityData, setCityData] = useState();
  const API_KEY = "5f38a955153345aebbc145451200410";
  const API_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;

  useEffect(() => {
    function fetchData() {
      axios.get(API_URL).then((res) => {
        setCityData(res.data);
        setIsLoading(false);
      });
    }
    fetchData();
  }, []);

  return (
    <Router>
      {!isLoading && (
        <CurrentCityContext.Provider value={{ city, setCity }}>
          <CityDataContext.Provider value={{ cityData, setCityData }}>
            <div className="container">
              <Nav />
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/dashboard" component={Dashboard} />
            </div>
          </CityDataContext.Provider>
        </CurrentCityContext.Provider>
      )}
    </Router>
  );
}

export default App;
