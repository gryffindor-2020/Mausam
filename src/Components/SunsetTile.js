import React from "react";

function SunsetTile(){
    return <div className="highlights__tile">
        <h3 className="highlights__tile--heading">Sunset and Sunrise</h3>
        <div className="highlights__tile--info">
            <div className="circle">&uarr;</div>
            <h3 className="highlights__tile--value">5:39</h3>
        </div>
        

        <div className="highlights__tile--info">
            <div className="circle">&darr;</div>
            <h3 className="highlights__tile--value">Sunset</h3>
        </div>
    </div>
}
export default SunsetTile;