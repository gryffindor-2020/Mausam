import React, { useContext, useEffect } from "react";
import Tile from "./HighlightTile";
import { CityDataContext } from "./Context";
function Highlights() {
  const { cityData } = useContext(CityDataContext);

  let data1 = [];
  const uv = { type: "UV Index", value: cityData.current.uv };
  const windStatus = {
    type: "Wind Status",
    value: cityData.current.wind_kph,
    unit: "km/hr",
    comment: cityData.current.wind_dir,
  };
  const visibility = {
    type: "Visibility",
    value: cityData.current.vis_km,
    unit: "km",
  };
  const humidity = {
    type: "Humidity",
    value: cityData.current.humidity,
    unit: "%",
  };
  data1.push(uv);
  data1.push(windStatus);
  data1.push(visibility);
  data1.push(humidity);
  useEffect(() => {});

  return (
    <div className="highlights">
      <h2 className="highlights__heading">Today's Highlights</h2>
      <div className="highlights__info">
        {data1.map((el, index) => {
          return <Tile object={el} key={index} />;
        })}
      </div>
      {console.log("City Data", cityData.current.uv)}
    </div>
  );
}
export default Highlights;
