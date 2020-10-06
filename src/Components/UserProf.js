import React, { useContext } from "react";
import { CityDataContext } from "./Context";
import AddCity from "./AddLocation";
function Prof() {
  const { cityData } = useContext(CityDataContext);
  const { location, current } = cityData;

  return (
    <div className="user-profile">
      <AddCity />
      <div className="location">
        <h2 className="location__city">{location.name}</h2>
        <h3 className="location__country">{location.country}</h3>
      </div>
      <div className="date">{location.localtime}</div>
      <h1 className="today">Today</h1>
      <div className="temperature">
        <img
          src={current.condition.icon}
          className="temperature__img"
          alt="Current Weather icon"
        />
        <h1 className="temperature__value">{current.temp_c}</h1>
        <span className="temperature__unit">&#176; C</span>
      </div>
    </div>
  );
}
export default Prof;
