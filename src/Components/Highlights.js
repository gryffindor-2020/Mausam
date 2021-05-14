import React from "react";
import { connect } from "react-redux";

import Tile from "./HighlightTile";

function Highlights(props) {
  console.log(props);
  return (
    <div className="highlights">
      <h2 className="highlights__heading">Today's Highlights</h2>
      <div className="highlights__info">
        {props.city.map((el, index) => {
          return <Tile object={el} key={index} />;
        })}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  currentCity: state.city.currentCity,
});
export default connect(mapStateToProps)(Highlights);
