import React from 'react';
import Nav from "./Nav";
import Highlights from "./Highlights";
import Profile from "./UserProf"; 
function App() {
  return (
    <div className="container">
      <Nav/>
      <Highlights/>
      <Profile/>
    </div>
  );
}

export default App;
