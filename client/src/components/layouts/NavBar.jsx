import React from "react";
import { Link } from "react-router";
import Header from "../Header";

const NavBar = () => {
  return (
    <nav>
      <Header />
      <div>
        <ul>
          <li>
            <Link to="/">home</Link>
            <Link to="/about">about us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
