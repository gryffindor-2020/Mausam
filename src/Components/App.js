/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState,useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import Nav from "./Nav";
import Dashboard from "./Dashboard";
import withSpinner from "./spinner/spinner";

import { setCurrentCity } from "../redux/city/city.actions";
const API_KEY = "5f38a955153345aebbc145451200410";

const DashboardWithSpinner = withSpinner(Dashboard);

function App(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [IPAddress, setIPAddress] = useState("");
  const [isIPLoading, setIsIPLoading] = useState(true);
  useEffect(() => {
    const API_URL_IP = `https://geolocation-db.com/json/e4f42070-ad2d-11eb-adf1-cf51da9b3410`;
    fetch(API_URL_IP)
      .then((res) => res.json())
      .then((data) => {
        setIPAddress(data.IPv4);
        setIsIPLoading(false);
      });

    const API_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${IPAddress}&aqi=yes`;
    if (isIPLoading === false) {
      fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
          props.setCurrentCity({
            ...data,
          });
          setIsLoading(false);
        });
    }
  }, [isIPLoading]);
  return (
    <Router>
      <div className="container">
        <Nav />
        <DashboardWithSpinner isLoading={isLoading} />
      </div>
    </Router>
  );
}
const mapDispatchToProps = (dispatch) => ({
  setCurrentCity: (city) => dispatch(setCurrentCity(city)),
});
export default connect(null, mapDispatchToProps)(App);
