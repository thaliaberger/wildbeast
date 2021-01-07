import React from "react";
import { Link } from "react-router-dom";

import logo from "../images/wildbeast.svg";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={logo} alt="wildbeast-logo" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/sobre">sobre</Link>
          </li>
          <li>
            <Link to="/">animais</Link>
          </li>
          <li>
            <Link to="/contato">contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
