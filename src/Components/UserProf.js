import React from "react";
import AddCity from "./AddLocation";
function Prof() {
  const location = {
    name: "Delhi",
    region: "Delhi",
    country: "India",
    lat: 28.67,
    lon: 77.22,
    tz_id: "Asia/Kolkata",
    localtime_epoch: 1620284439,
    localtime: "2021-05-06 12:30",
  };
  const current = {
    last_updated_epoch: 1620283500,
    last_updated: "2021-05-06 12:15",
    temp_c: 36.0,
    temp_f: 96.8,
    is_day: 1,
    condition: {
      text: "Mist",
      icon: "//cdn.weatherapi.com/weather/64x64/day/143.png",
      code: 1030,
    },
  };
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
