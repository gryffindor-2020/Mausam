import React, { useEffect, useState } from "react";
import SearchResults from "./SearchResults";
import axios from "axios";

function AddLocation() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const ACCUWEATHER_API_KEY = "G04E9fISCyONB4F0iTgXEn8VGifhFBUg";
  const API_URL = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${ACCUWEATHER_API_KEY}&q=${query}`;

  function handleChange(e) {
    setQuery(e.target.value);
  }
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(API_URL);
      if (res.data.length > 5) {
        res.data.length -= res.data.length - 5;
      }
      setResults(res.data);
    }
    fetchData();
  });

  return (
    <div className="add-location">
      <div className="add-location__search">
        <input
          placeholder="Delhi, London, New York and many more..."
          type="text"
          className="add-location__input"
          onChange={handleChange}
        />
        <i className="fas fa-search add-location__icon" />
        {query !== "" && results.length !== 0 && (
          <SearchResults results={results} />
        )}
      </div>
    </div>
  );
}
export default AddLocation;
