import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

export default function LandingPage() {
  return (
    
      <div  className="mainConteiner">
        <div >
          <Link to="/home">
            <button className="btn4">
              <span>GET IN</span>
            </button>
          </Link>
        </div>
      </div>
    
  );
}
