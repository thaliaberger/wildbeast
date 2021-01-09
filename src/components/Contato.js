import React from "react";
import { Link } from "react-router-dom";

import Header from "./Header";

import instagram from "../images/1.png";
import facebook from "../images/2.png";
import twitter from "../images/3.png";
import email from "../images/4.png";

function Contato() {
  return (
    <div>
      <Header />
      <div className="social-media-logos">
        <Link to="#">
          <img
            className="social-media-logo"
            src={instagram}
            alt="instagram icon"
          />
        </Link>
        <Link to="#">
          {" "}
          <img
            className="social-media-logo"
            src={facebook}
            alt="facebook icon"
          />
        </Link>
        <Link to="#">
          {" "}
          <img className="social-media-logo" src={twitter} alt="twitter icon" />
        </Link>
        <Link to="#">
          {" "}
          <img className="social-media-logo" src={email} alt="email icon" />
        </Link>
      </div>
    </div>
  );
}

export default Contato;
