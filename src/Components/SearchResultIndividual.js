import React, { useContext, useEffect } from "react";
import axios from "axios";
import { CurrentCityContext, CityDataContext } from "./Context";

function SearchResult(props) {
  const data = props.data;
  const { city, setCity } = useContext(CurrentCityContext);
  const { setCityData } = useContext(CityDataContext);
  const API_KEY = "5f38a955153345aebbc145451200410";
  const API_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;

  function handleClick() {
    setCity(data.lat + "," + data.lon);
  }

  useEffect(() => {
    function fetchData() {
      axios.get(API_URL).then((res) => {
        setCityData(res.data);
      });
    }
    fetchData();
  }, []);
  return (
    <div className="search-result__individual" onClick={handleClick}>
      <span className="search-result__text">{data.name}</span>
      <i className="fas fa-plus-square search-result__icon" />
    </div>
  );
}
export default SearchResult;
