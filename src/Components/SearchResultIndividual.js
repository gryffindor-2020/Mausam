import React from "react";

function SearchResult(props) {
  const data = props.data;
  function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
      if (list[i].lat === obj.lat && list[i].lon === obj.lon) {
        return true;
      }
    }

    return false;
  }
  let cities = JSON.parse(localStorage.getItem("SAVED_CITIES_MAUSAM"));
  const ifAlreadyInSavedCities = containsObject(
    {
      name: data.name,
      country: data.country,
      lat: data.lat,
      lon: data.lon,
    },
    cities
  );

  function handleClick() {
    let savedCities = JSON.parse(localStorage.getItem("SAVED_CITIES_MAUSAM"));
    savedCities = [
      ...savedCities,
      {
        name: data.region,
        country: data.country,
        lat: data.lat,
        lon: data.lon,
      },
    ];
    localStorage.setItem("SAVED_CITIES_MAUSAM", JSON.stringify(savedCities));
    savedCities = JSON.parse(localStorage.getItem("SAVED_CITIES_MAUSAM"));
    console.log(savedCities);
  }

  return (
    <div
      className="search-result__individual"
      onClick={ifAlreadyInSavedCities ? null : handleClick}
    >
      <span className="search-result__text">{data.name}</span>
      {ifAlreadyInSavedCities && (
        <i className="search-result__icon fas fa-check-square" />
      )}
      {!ifAlreadyInSavedCities && (
        <i className="fas fa-plus-square search-result__icon" />
      )}
    </div>
  );
}
export default SearchResult;
