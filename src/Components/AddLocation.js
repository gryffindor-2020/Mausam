import React, { useState, useEffect } from "react";
import SearchResults from "./SearchResults";
function AddLocation() {
  const API_KEY = "5f38a955153345aebbc145451200410";

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  function handleChange(e) {
    setQuery(e.target.value);
  }
  function handleClick() {
    setQuery("");
  }
  useEffect(() => {
    const API_URL = `http://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${query}`;
    if (query.length >= 3) {
      fetch(API_URL)
        .then((res) => res.json())
        .then((data) => setResults(data.slice(0, 4)));
    }
  }, [query]);
  return (
    <div className="add-location">
      <div className="add-location__search">
        <input
          value={query}
          placeholder="Delhi, New York ..."
          type="text"
          className="add-location__input"
          onChange={handleChange}
        />
        {query === "" && <i className="fas fa-search add-location__icon" />}
        {query !== "" && (
          <i
            type="button"
            className="fas fa-times add-location__icon add_location__icon--remove"
            onClick={handleClick}
          />
        )}
        {query !== "" && results.length !== 0 && (
          <SearchResults results={results} />
        )}
      </div>
    </div>
  );
}
export default AddLocation;
