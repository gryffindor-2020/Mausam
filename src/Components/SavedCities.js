import React from "react";
import HighlightTile from "./HighlightTile";
function SavedCities() {
  const cities = [
    {
      value: "Delhi",
      type: "India",
    },
    {
      value: "Delhi",
      type: "India",
    },
  ];
  return (
    <div className="saved-cities">
      <h2 className="saved-cities__heading">Saved Cities</h2>
      <div className="saved-cities__tiles">
        {cities.map((city) => {
          return <HighlightTile object={city} />;
        })}
      </div>
    </div>
  );
}
export default SavedCities;
