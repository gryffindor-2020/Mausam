import React from "react";

function SearchResult(props) {
  const data = props.data;
  return (
    <div className="search-result__individual">
      <span className="search-result__text">{data.name}</span>
      <i className="fas fa-plus-square search-result__icon" />
    </div>
  );
}
export default SearchResult;
