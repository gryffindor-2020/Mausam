import React from "react";

function Prof(){
    return <div className="user-profile">
            <div className="location">
                <h2 className="location__city">The Hague,</h2>
                <h3 className="location__country">Netherlands</h3>
            </div>
            <div className="date">Dec 31,2019</div>
            <h1 className="today">Today</h1>
            <div className="temperature">
                <img src={require("../sun.png")} className="temperature__img" alt="Current Weather icon"/>
                <h1 className="temperature__value">19</h1>
                <span className="temperature__unit">&#176; C</span> 
            </div>

        </div>
}
export default Prof;