import React from "react";
import { connect } from "react-redux";
import { setCurrentCity } from "../redux/city/city.actions";
const API_KEY = "5f38a955153345aebbc145451200410";
function SearchResult({
  setCurrentCity,
  data: { name, region, country, lat, lon },
}) {
  function handleClick() {
    const API_URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${lat}${" "}${lon}&aqi=yes`;
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setCurrentCity({
          ...data,
        });
      });
  }
  return (
    <div className="search-result__individual" onClick={handleClick}>
      <span className="search-result__text">{`${name},${region},${country}`}</span>
      <i className="fas fa-plus-square search-result__icon" />
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  setCurrentCity: (city) => dispatch(setCurrentCity(city)),
});
export default connect(null, mapDispatchToProps)(SearchResult);
