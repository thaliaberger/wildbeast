import React from "react";

import Header from "../Header";
import Nav from "../Nav";
import Anuncios from "../Anuncios";
import Footer from "../Footer";

import cervo1 from "../../images/cervo/cervo1.jpg";
import cervo2 from "../../images/cervo/cervo3.jpg";
import cervo3 from "../../images/cervo/cervo2.jpg";

function Cervo() {
  return (
    <div className="estrutura">
      <Header />
      <Nav />

      <main className="content">
        <div className="titulo">
          <h1>Cervo</h1>
          <span>da família cervidae</span>
        </div>
        <div className="caracteristicas">
          <div>
            <span className="numero">150</span>
            <span className="rotulo">kg</span>
          </div>
          <div>
            <span className="numero">20</span>
            <span className="rotulo">age</span>
          </div>
        </div>

        <p className="col-wide">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
          ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Nulla at risus.
        </p>

        <img className="img1" src={cervo1} alt="cervo1" />
        <p className="destaque">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
          ligula eu lectus lobortis condimentum.
        </p>

        <img className="img2" src={cervo2} alt="cervo2" />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
          ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Nulla at risus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
          ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Nulla at risus.
        </p>
        <blockquote className="citacao col-wide">
          <p>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
            ligula eu lectus lobortis condimentum.”
          </p>
        </blockquote>

        <ul className="atributos">
          <li>Surgiu: 00.000 anos</li>
          <li>Tipo: Mamífero</li>
          <li>Idade Média: 20 anos</li>
          <li>Macho adulto: 150kg</li>
          <li>Fêmea adulta: 150kg</li>
          <li>Família: Cervidae</li>
        </ul>

        <div className="informacoes">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
            ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Nulla at risus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
            ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Nulla at risus.
          </p>
        </div>
        <img className="col-wide" src={cervo3} alt="lobo3" />
      </main>
      <Anuncios />
      <Footer />
    </div>
  );
}

export default Cervo;
