import React, { useState, useEffect } from "react";
import SearchResults from "./SearchResults";
import store from "./../redux/store";
import axios from "axios";
import withSpinner from "./spinner/spinner";

const SearchResultsWithSpinner = withSpinner(SearchResults);
function AddLocation() {
  const API_KEY = "5f38a955153345aebbc145451200410";

  const [query, setQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [results, setResults] = useState([]);
  function handleChange(e) {
    setQuery(e.target.value);
    setIsTyping(true);
  }
  function handleClick() {
    setQuery("");
  }
  useEffect(() => {
    const API_URL = `https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${query}`;

    const delayDebounce = setTimeout(() => {
      if (query.length >= 3) {
        axios.get(API_URL).then((res) => setResults(res.data.slice(0, 4)));
      }
      setIsTyping(false);
    }, 500);

    store.subscribe(() => {
      handleClick();
    });
    return () => clearTimeout(delayDebounce);
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
        {query !== "" && (
          <SearchResultsWithSpinner results={results} isLoading={isTyping} />
        )}
      </div>
    </div>
  );
}
export default AddLocation;
