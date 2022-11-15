import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <section>
      <div>
        <h1>¡Let's go around the World!</h1>
        <Link to="/home">
          <button>GET IN</button>
        </Link>
      </div>
    </section>
  );
}
