import React from "react";
import { connect } from "react-redux";

import Tile from "./HighlightTile";

function Highlights({ currentCity: { current } }) {
  return (
    <div className="highlights">
      <h2 className="highlights__heading">Today's Highlights</h2>
      <div className="highlights__info">
        <Tile object={{ type: "UV Index", value: current.uv }} />
        <Tile
          object={{
            type: "Wind Status",
            value: current.wind_kph,
            unit: "km/hr",
            comment: current.wind_dir,
          }}
        />
        <Tile
          object={{ type: "Visibility", value: current.vis_km, unit: "km" }}
        />
        <Tile
          object={{ type: "Humidity", value: current.humidity, unit: "%" }}
        />
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  currentCity: state.city.currentCity,
});
export default connect(mapStateToProps)(Highlights);
