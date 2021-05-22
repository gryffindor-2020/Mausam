import React, {useState,useEffect} from "react";
import { connect } from "react-redux";
import Highlights from "./Highlights";
import Profile from "./UserProf";
import withSpinner from "./spinner/spinner";

import { setCurrentCity } from "../redux/city/city.actions";
const API_KEY = "5f38a955153345aebbc145451200410";
const API_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=mumbai&aqi=yes`;

const HighlightsWithSpinner = withSpinner(Highlights);
const ProfileWithSpinner = withSpinner(Profile);
function Dashboard(props) {
  const [isLoading, setIsLoading] = useState(true)
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
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json()) 
      .then((data) => {
        props.setCurrentCity({
          ...data
        });
        setIsLoading(false);
      });
  });
  return (
    <React.Fragment>
      <HighlightsWithSpinner isLoading={isLoading} city={data1} />
      <ProfileWithSpinner isLoading={isLoading} />
    </React.Fragment>
  );
}
const mapDispatchToProps = (dispatch) => ({
  setCurrentCity: (city) => dispatch(setCurrentCity(city)),
});
export default connect(null, mapDispatchToProps)(Dashboard);
