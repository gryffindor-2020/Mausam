import React from "react";
import Tile from "./HighlightTile";
function Highlights(){

  const data = [
    {
        type : "UV Index",
        value : "5"
    },
    {
  type:"Wind Status",
  value:"16",
  unit:"km/hr",
  comment:"WSW"
    },
    {
      type:"Visibility",
      value:"12",
      unit:"km",
      comment:"Average"
    }
]
    return <div className="highlights">
              <h2 className="highlights__heading">Today's Highlights</h2>
              <div className="highlights__info">
                {data.map((el,index) => {
                  return <Tile object={el} key={index}/>
                })}
              </div>
          </div>
}
export default Highlights;