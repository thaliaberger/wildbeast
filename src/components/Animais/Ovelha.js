import React from "react";

import Header from "../Header";
import Nav from "../Nav";
import Anuncios from "../Anuncios";
import Footer from "../Footer";

import ovelha1 from "../../images/ovelha/ovelha1.jpg";
import ovelha2 from "../../images/ovelha/ovelha2.jpg";
import ovelha3 from "../../images/ovelha/ovelha3.jpg";

function Ovelha() {
  return (
    <div className="estrutura">
      <Header />
      <Nav />

      <main className="content">
        <div className="titulo">
          <h1>Ovelha</h1>
          <span>da família caprinae</span>
        </div>
        <div className="caracteristicas">
          <div>
            <span className="numero">70</span>
            <span className="rotulo">kg</span>
          </div>
          <div>
            <span className="numero">11</span>
            <span className="rotulo">age</span>
          </div>
        </div>
        <p className="col-wide">
          A ovelha é um mamífero ruminante bovídeo da sub-família Caprinae. O
          carneiro é o macho da ovelha e os juvenis são cordeiros, anhos ou
          borregos. É um animal de enorme importância econômica como fonte de
          carne, laticínios, lã e couro.
        </p>

        <img className="img1" src={ovelha1} alt="ovelha1" />
        <p className="destaque">
          É um animal de enorme importância econômica como fonte de carne,
          laticínios, lã e couro.
        </p>

        <img
          className="img2"
          src={ovelha2}
          alt="ovelha2
      "
        />

        <p>
          A ovelha é um mamífero ruminante bovídeo da sub-família Caprinae. O
          carneiro é o macho da ovelha e os juvenis são cordeiros, anhos ou
          borregos. É um animal de enorme importância econômica como fonte de
          carne, laticínios, lã e couro.
        </p>
        <p>
          A ovelha é um mamífero ruminante bovídeo da sub-família Caprinae. O
          carneiro é o macho da ovelha e os juvenis são cordeiros, anhos ou
          borregos. É um animal de enorme importância econômica como fonte de
          carne, laticínios, lã e couro.
        </p>
        <blockquote className="citacao col-wide">
          <p>
            “É um animal de enorme importância econômica como fonte de carne,
            laticínios, lã e couro. ”
          </p>
        </blockquote>

        <ul className="atributos">
          <li>Surgiu: 00.000 anos</li>
          <li>Tipo: Mamífero</li>
          <li>Idade Média: 11 anos</li>
          <li>Macho adulto: 160kg</li>
          <li>Fêmea adulta: 100kg</li>
          <li>Família: Caprinae</li>
        </ul>

        <div className="informacoes">
          <p>
            A ovelha é um mamífero ruminante bovídeo da sub-família Caprinae. O
            carneiro é o macho da ovelha e os juvenis são cordeiros, anhos ou
            borregos. É um animal de enorme importância econômica como fonte de
            carne, laticínios, lã e couro.
          </p>
          <p>
            A ovelha é um mamífero ruminante bovídeo da sub-família Caprinae. O
            carneiro é o macho da ovelha e os juvenis são cordeiros, anhos ou
            borregos. É um animal de enorme importância econômica como fonte de
            carne, laticínios, lã e couro.
          </p>
        </div>

        <img className="col-wide" src={ovelha3} alt="ovelha3" />
      </main>
      <Anuncios />
      <Footer />
    </div>
  );
}

export default Ovelha;
