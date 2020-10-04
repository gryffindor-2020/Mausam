import React from "react";

function SearchResult(props) {
  const data = props.data;
  const name = data.LocalizedName;
  const country = data.Country.LocalizedName;
  return (
    <div className="search-result__individual">
      {name},{country}
    </div>
  );
}
export default SearchResult;
