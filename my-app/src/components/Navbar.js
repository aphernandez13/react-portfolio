import React from "react";
import { Link, link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" class="navbar-brand">
          Alfredo Pedroza
        </Link>
        
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/" className="nav-link" >
                About <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio" className="nav-link" >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}





