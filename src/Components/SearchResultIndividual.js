import React from "react";

// const API_KEY = "5f38a955153345aebbc145451200410";
// const API_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;
function SearchResult({ data: { name, region, country, lat, lon } }) {
  function handleClick() {
    console.log(lat, lon);
  }
  return (
    <div className="search-result__individual" onClick={handleClick}>
      <span className="search-result__text">{`${name},${region},${country}`}</span>
      <i className="fas fa-plus-square search-result__icon" />
    </div>
  );
}
export default SearchResult;
