import React from "react";
import SearchResult from "./SearchResultIndividual";

function SearchResults(props) {
  return (
    <div className="search-result">
      {props.results.map((result) => {
        return <SearchResult data={result} id={result.Key} />;
      })}
    </div>
  );
}
export default SearchResults;
