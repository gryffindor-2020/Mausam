import React from "react";
import SearchResult from "./SearchResultIndividual";

function SearchResults(props) {
  return (
    <div className="search-result">
      {props.results.map((result) => {
        return (
          <SearchResult
            data={result}
            key={result.id}
            handleSelectCity={props.handleSelectCity}
          />
        );
      })}
    </div>
  );
}
export default SearchResults;
