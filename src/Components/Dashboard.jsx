import React from "react";
import Highlights from "./Highlights";
import Profile from "./UserProf";

function Dashboard() {
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
    <React.Fragment>
      <Highlights city={data1} />
      <Profile />
    </React.Fragment>
  );
}
export default Dashboard;
