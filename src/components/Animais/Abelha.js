import React from "react";

import Header from "../Header";
import Nav from "../Nav";
import Anuncios from "../Anuncios";
import Footer from "../Footer";

import abelha1 from "../../images/abelhas/abelha1.jpg";
import abelha2 from "../../images/abelhas/abelha2.jpg";
import abelha3 from "../../images/abelhas/abelha3.jpg";

function Abelha() {
  return (
    <div className="estrutura">
      <Header />
      <Nav />

      <main className="content">
        <div className="titulo">
          <h1>Abelha</h1>
          <span>da família apoidea</span>
        </div>
        <div className="caracteristicas">
          <div>
            <span className="numero">65</span>
            <span className="rotulo">mg</span>
          </div>
          <div>
            <span className="numero">122</span>
            <span className="rotulo">dias</span>
          </div>
        </div>
        <p className="col-wide">
          Há mais de 25.000 espécies de abelhas conhecidas em sete famílias
          biológicas reconhecidas. Elas são encontrados em todos os continentes,
          exceto a Antártida, em todos os habitats do planeta onde existam
          plantas de flores polinizadas por insetos.
        </p>

        <img className="img1" src={abelha1} alt="abelha1" />
        <p className="destaque">
          Há mais de 25.000 espécies de abelhas conhecidas em sete famílias
          biológicas reconhecidas.
        </p>

        <img className="img2" src={abelha2} alt="abelha2" />

        <p>
          Há mais de 25.000 espécies de abelhas conhecidas em sete famílias
          biológicas reconhecidas. Elas são encontrados em todos os continentes,
          exceto a Antártida, em todos os habitats do planeta onde existam
          plantas de flores polinizadas por insetos.
        </p>
        <p>
          Há mais de 25.000 espécies de abelhas conhecidas em sete famílias
          biológicas reconhecidas. Elas são encontrados em todos os continentes,
          exceto a Antártida, em todos os habitats do planeta onde existam
          plantas de flores polinizadas por insetos.
        </p>
        <blockquote className="citacao col-wide">
          <p>
            “Há algo no uivar do lobo que tira um homem do aqui e agora e o
            transporta para uma floresta da mente.”
          </p>
        </blockquote>

        <ul className="atributos">
          <li>Surgiu: 12.000 anos</li>
          <li>Tipo: Mamífero</li>
          <li>Idade Média: 13 anos</li>
          <li>Macho adulto: 80kg</li>
          <li>Fêmea adulta: 55kg</li>
          <li>Família: Lupus</li>
        </ul>

        <div className="informacoes">
          <p>
            É um sobrevivente da Era do Gelo, originário do Pleistoceno
            Superior, cerca de 300 mil anos atrás. O sequenciamento de DNA e
            estudos genéticos reafirmam que o lobo cinzento é ancestral do cão
            doméstico.
          </p>
          <p>
            É um sobrevivente da Era do Gelo, originário do Pleistoceno
            Superior, cerca de 300 mil anos atrás. O sequenciamento de DNA e
            estudos genéticos reafirmam que o lobo cinzento é ancestral do cão
            doméstico.
          </p>
        </div>

        <img className="col-wide" src={abelha3} alt="abelha3" />
      </main>
      <Anuncios />
      <Footer />
    </div>
  );
}

export default Abelha;
