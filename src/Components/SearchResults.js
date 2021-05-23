import React from "react";
import SearchResult from "./SearchResultIndividual";

function SearchResults({ results }) {
  return (
    <div className="search-result">
      {results.map((result) => {
        return <SearchResult data={result} key={result.id} />;
      })}
    </div>
  );
}
export default SearchResults;
