import React from "react";
import SearchResultIndividual from "./SearchResultIndividual";

function SearchResults({ results }) {
  return (
    <div
      className="search-result"
      style={results.length === 0 ? { cursor: "default" } : null}
    >
      {results.length === 0 && (
        <div className="search-result__text">No city found :(</div>
      )}
      {results.map((result) => {
        return <SearchResultIndividual data={result} key={result.id} />;
      })}
    </div>
  );
}
export default SearchResults;
