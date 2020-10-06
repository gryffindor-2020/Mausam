import React, { useContext } from "react";
import { CurrentCityContext } from "./Context";

function SearchResult(props) {
  const data = props.data;
  const { setCity } = useContext(CurrentCityContext);
  function handleClick() {
    const city = data.lat + "," + data.lon;
    setCity(city);
  }

  return (
    <div className="search-result__individual" onClick={handleClick}>
      <span className="search-result__text">{data.name}</span>
      <i className="fas fa-plus-square search-result__icon" />
    </div>
  );
}
export default SearchResult;
