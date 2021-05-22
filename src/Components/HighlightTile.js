import React from "react";

function Tile(props) {
  return (
    <div className="highlights__tile">
      <h3 className="highlights__tile--heading">{props.object.type}</h3>
      <div className="highlights__tile--data">
        <h1 className="highlights__tile--value">{props.object.value}</h1>
        <h3 className="highlights__tile--unit">{props.object.unit}</h3>
      </div>
      <h4 className="highlights__tile--comment">
        {props.object.comment ? props.object.comment : ""}
      </h4>
    </div>
  );
}
export default Tile;
