import React from "react";

import Header from "./Header";

function Sobre() {
  return (
    <div>
      <Header />
      <div className="sobre-container">
        <h1 className="sobre-title">Wildbeast</h1>
        <p className="sobre-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
          ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Nulla at risus.
        </p>
      </div>
    </div>
  );
}

export default Sobre;
