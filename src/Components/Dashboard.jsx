import React from "react";
import Highlights from "./Highlights";
import Profile from "./UserProf"; 

function Dashboard(){
    return <React.Fragment>
        <Highlights/>
      <Profile/>
    </React.Fragment>
}
export default Dashboard;