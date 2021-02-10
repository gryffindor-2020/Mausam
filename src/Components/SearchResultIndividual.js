import React, { useContext, useEffect } from "react";
import axios from "axios";

function SearchResult(props) {
  const data = props.data;
  const API_KEY = "5f38a955153345aebbc145451200410";
  const API_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;

  function handleClick() {
    // console.log(city);
  }

  return (
    <div className="search-result__individual" onClick={handleClick}>
      <span className="search-result__text">{data.name}</span>
      <i className="fas fa-plus-square search-result__icon" />
    </div>
  );
}
export default SearchResult;
