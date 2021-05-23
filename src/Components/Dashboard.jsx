import React from "react";
import { connect } from "react-redux";
import Highlights from "./Highlights";
import Profile from "./UserProf";


function Dashboard(){
return <React.Fragment>
       <Highlights />
       <Profile />
     </React.Fragment>
}
const mapStateToProps = (state) => ({
  currentCity: state.city.currentCity,
});
export default connect(mapStateToProps)(Dashboard);