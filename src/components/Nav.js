import React from "react";
import { Link } from "react-router-dom";

import cervo from "../images/icones/cervo.svg";
import touro from "../images/icones/vaca.svg";
import leao from "../images/icones/leao.svg";
import abelha from "../images/icones/abelha.svg";
import ovelha from "../images/icones/ovelha.svg";
import gato from "../images/icones/gato.svg";

function Nav() {
  return (
    <nav className="sidenav">
      <ul>
        <li>
          <Link to="/cervo">
            <img src={cervo} alt="cervo" />
          </Link>
        </li>
        <li>
          <Link to="/leao">
            <img src={leao} alt="leao" />
          </Link>
        </li>
        <li>
          <Link to="/gato">
            <img src={gato} alt="gato" />
          </Link>
        </li>
        <li>
          <Link to="/touro">
            <img src={touro} alt="touro" />
          </Link>
        </li>
        <li>
          <Link to="/ovelha">
            <img src={ovelha} alt="ovelha" />
          </Link>
        </li>
        <li>
          <Link to="/abelha">
            <img src={abelha} alt="abelha" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
