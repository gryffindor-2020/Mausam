import React, { useState } from "react";

function AddLocation() {
  // const API_KEY = "5f38a955153345aebbc145451200410";
  // const API_URL = `http://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${query}`;

  const [query, setQuery] = useState("");
  // const [result, setResults] = useState();
  async function handleChange(e) {
    setQuery(e.target.value);
    // const searchResults = await retrieveMovies(e.target.value);
    // setResults(searchResults);
  }
  function handleClick() {
    setQuery("");
  }
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
            className="fas fa-times add-location__icon"
            onClick={handleClick}
          />
        )}
        {/* {query !== "" && results.length !== 0 && (
          <SearchResults results={results} handleSelectCity={handleClick} />
        )} */}
      </div>
    </div>
  );
}
export default AddLocation;
