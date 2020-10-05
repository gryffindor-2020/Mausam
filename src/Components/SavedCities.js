import React from "react";
import SavedCityTile from "./SavedCityTile";
function SavedCities() {
  const cities = JSON.parse(localStorage.getItem("SAVED_CITIES_MAUSAM"));
  return (
    <div className="saved-cities">
      <h2 className="saved-cities__heading">Saved Cities</h2>
      <div className="saved-cities__tiles">
        {cities.map((city) => {
          return <SavedCityTile object={city} />;
        })}
      </div>
    </div>
  );
}
export default SavedCities;
