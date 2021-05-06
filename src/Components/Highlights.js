import React from "react";
import Tile from "./HighlightTile";
function Highlights() {
  let data1 = [];
  const uv = { type: "UV Index", value: 8 };
  const windStatus = {
    type: "Wind Status",
    value: 9,
    unit: "km/hr",
    comment: "WNW",
  };
  const visibility = {
    type: "Visibility",
    value: 2,
    unit: "km",
  };
  const humidity = {
    type: "Humidity",
    value: 39,
    unit: "%",
  };
  data1.push(uv);
  data1.push(windStatus);
  data1.push(visibility);
  data1.push(humidity);

  return (
    <div className="highlights">
      <h2 className="highlights__heading">Today's Highlights</h2>
      <div className="highlights__info">
        {data1.map((el, index) => {
          return <Tile object={el} key={index} />;
        })}
      </div>
    </div>
  );
}
export default Highlights;
