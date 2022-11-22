import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

export default function LandingPage() {
  return (
    
      <div  className="mainConteiner">
      <div className="containerOne">
        <p>
        "In this app you will find varied details about each country, as well as, you can find information about the sports activities that take place in these countries.
You can also create activities to assign to several countries at once. Enjoy it!"
        </p>
        </div>
        <div className="containerTwo" >
          <Link to="/home">
            <button className="btn4">
              <span>GET IN</span>
            </button>
          </Link>
        </div>
      </div>
    
  );
}
