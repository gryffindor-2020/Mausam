/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import Nav from "./Nav";
import Dashboard from "./Dashboard";
import withSpinner from "./spinner/spinner";

import { setCurrentCity } from "../redux/city/city.actions";
const API_KEY = "5f38a955153345aebbc145451200410";
const API_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=mumbai&aqi=yes`;

const DashboardWithSpinner = withSpinner(Dashboard);

function App(props) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        props.setCurrentCity({
          ...data,
        });
        setIsLoading(false);
      });
  }, []);
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
