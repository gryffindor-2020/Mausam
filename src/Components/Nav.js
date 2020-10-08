import React from "react";
import { NavLink, Link } from "react-router-dom";
function Nav() {
  return (
    <nav className="sidebar">
      <Link to="/">
        <div className="logo">
          <img className="logo__img" src={require("../logo.png")} alt="Logo" />
          <h2 className="logo__text">Mausam</h2>
        </div>
      </Link>
      <div className="menu">
        <NavLink to="dashboard">
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
