import React from "react";
function Nav(){
    return (
    
    <nav className="sidebar">
        <div className="logo">
            <img className="logo__img" src={require("../logo.png")} alt="Logo"/>
            <h2 className="logo__text">Mausam</h2>
        </div>
        
        <div className="logout">
            <h2 className="logout__text">Logout</h2>
            <i className="fas fa-sign-out-alt logout__icon"></i>
        </div>
    </nav>
    );
}
export default Nav;