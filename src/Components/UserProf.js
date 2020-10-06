import React, { useState, useEffect } from "react";
import axios from "axios";

function Prof() {
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState({});
  const [current, setCurrent] = useState({});
  const city = "Delhi";
  const API_KEY = "5f38a955153345aebbc145451200410";
  const API_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;

  useEffect(() => {
    function fetchData() {
      axios.get(API_URL).then((res) => {
        setLocation(res.data.location);
        setCurrent(res.data.current);
        setIsLoading(false);
      });
    }
    fetchData();
  }, []);

  return (
    <div className="user-profile">
      <div className="location">
        <h2 className="location__city">{location.name}</h2>
        <h3 className="location__country">{location.country}</h3>
      </div>
      <div className="date">{location.localtime}</div>
      <h1 className="today">Today</h1>
      <div className="temperature">
        {!isLoading && (
          <img
            src={current.condition.icon}
            className="temperature__img"
            alt="Current Weather icon"
          />
        )}
        <h1 className="temperature__value">{current.temp_c}</h1>
        <span className="temperature__unit">&#176; C</span>
      </div>
    </div>
  );
}
export default Prof;
