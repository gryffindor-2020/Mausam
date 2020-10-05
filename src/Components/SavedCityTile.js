import React from "react";

function SavedCityTile(props) {
  function handleClick() {
    let savedCities = JSON.parse(localStorage.getItem("SAVED_CITIES_MAUSAM"));
    console.log(savedCities);
  }
  return (
    <div className="highlights__tile">
      <h3 className="highlights__tile--heading">{props.object.country}</h3>
      <div className="highlights__tile--data">
        <h1 className="highlights__tile--value">{props.object.name}</h1>
      </div>
      <i
        className="far fa-trash-alt highlights__tile--delete"
        onClick={handleClick}
      />
    </div>
  );
}
export default SavedCityTile;
