import React, { useEffect, useState } from "react";
import SearchResults from "./SearchResults";
import axios from "axios";

function AddLocation() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const API_KEY = "5f38a955153345aebbc145451200410";
  const API_URL = `http://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${query}`;

  function handleChange(e) {
    setQuery(e.target.value);
  }
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(API_URL);
      if (res.data.length > 5) {
        res.data.length = 5;
      }
      setResults(res.data);
    }
    if (query !== "") {
      fetchData();
    }
  });

  return (
    <div className="add-location">
      <div className="add-location__search">
        <input
          placeholder="Delhi, New York ..."
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
