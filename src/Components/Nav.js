import React from "react";
import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <nav className="sidebar">
      <div className="logo">
        <img className="logo__img" src={require("../logo.png")} alt="Logo" />
        <h2 className="logo__text">Mausam</h2>
      </div>
      <div className="menu">
        <NavLink to="dashboard" className="active">
          <div className="menu__item">
            <i className="fas fa-home menu__item--icon"></i>
            <h2 className="menu__item--text">Dashboard</h2>
          </div>
        </NavLink>
      </div>
    </nav>
  );
}
export default Nav;
