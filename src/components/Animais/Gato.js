import React from "react";

import Header from "../Header";
import Nav from "../Nav";
import Anuncios from "../Anuncios";
import Footer from "../Footer";

import gato1 from "../../images/gato/gato1.jpg";
import gato2 from "../../images/gato/gato2.jpg";
import gato3 from "../../images/gato/gato3.jpg";

function Gato() {
  return (
    <div className="estrutura">
      <Header />
      <Nav />

      <main className="content">
        <div className="titulo">
          <h1>Gato</h1>
          <span>da família felidae</span>
        </div>
        <div className="caracteristicas">
          <div>
            <span className="numero">4</span>
            <span className="rotulo">kg</span>
          </div>
          <div>
            <span className="numero">16</span>
            <span className="rotulo">age</span>
          </div>
        </div>

        <p className="col-wide">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
          ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Nulla at risus.
        </p>

        <img className="img1" src={gato1} alt="gato1" />
        <p className="destaque">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
          ligula eu lectus lobortis condimentum.
        </p>

        <img className="img2" src={gato2} alt="gato2" />

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
          <li>Idade Média: 16 anos</li>
          <li>Macho adulto: 4kg</li>
          <li>Fêmea adulta: 4kg</li>
          <li>Família: Felidae</li>
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
        <img className="col-wide" src={gato3} alt="gato3" />
      </main>
      <Anuncios />
      <Footer />
    </div>
  );
}

export default Gato;
