import React from "react";

import Header from "../Header";
import Nav from "../Nav";
import Anuncios from "../Anuncios";
import Footer from "../Footer";

import touro1 from "../../images/touro/touro.jpg";
import touro2 from "../../images/touro/touroo.jpg";
import touro3 from "../../images/touro/touro3.jpg";

function Vaca() {
  return (
    <div className="estrutura">
      <Header />
      <Nav />

      <main className="content">
        <div className="titulo">
          <h1>Touro</h1>
          <span>da família bovidae</span>
        </div>
        <div className="caracteristicas">
          <div>
            <span className="numero">1k</span>
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

        <img className="img1" src={touro1} alt="touro1" />
        <p className="destaque">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
          ligula eu lectus lobortis condimentum.
        </p>

        <img className="img2" src={touro2} alt="touro2" />

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
          <li>Macho adulto: 1.100kg</li>
          <li>Fêmea adulta: 720kg</li>
          <li>Família: Bovidae</li>
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

        <img className="col-wide" src={touro3} alt="touro3" />
      </main>
      <Anuncios />
      <Footer />
    </div>
  );
}

export default Vaca;
