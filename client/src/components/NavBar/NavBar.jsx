import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";


export default function NavBar() {

  return (
    <div className="nav">
      <div className="buttonHome"><Link className="link1" to="/home" >Home</Link></div>
      <div className="buttonForm"><Link className="link1" to="/activities" >Create Activity</Link></div>
      <div className="about"><h3 >About me</h3></div>
    </div>
  );
}
