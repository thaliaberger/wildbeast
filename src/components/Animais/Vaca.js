import React from "react";

import Header from "../Header";
import Nav from "../Nav";
import Anuncios from "../Anuncios";
import Footer from "../Footer";

import lobo1 from "../../images/wolf1.jpg";
import lobo2 from "../../images/wolf2.jpg";
import touro3 from "../../images/touro3.jpg";

function Vaca() {
  return (
    <div className="estrutura">
      <Header />
      <Nav />

      <main className="content">
        <div className="titulo">
          <h1>Touro</h1>
          <span>da família canis lupus</span>
        </div>
        <div className="caracteristicas">
          <div>
            <span className="numero">72</span>
            <span className="rotulo">kg</span>
          </div>
          <div>
            <span className="numero">13</span>
            <span className="rotulo">age</span>
          </div>
        </div>
        <p className="col-wide">
          É um sobrevivente da Era do Gelo, originário do Pleistoceno Superior,
          cerca de 300 mil anos atrás. O sequenciamento de DNA e estudos
          genéticos reafirmam que o lobo cinzento é ancestral do cão doméstico
        </p>

        <img className="img1" src={lobo1} alt="lobo1" />
        <p className="destaque">
          É um sobrevivente da Era do Gelo, originário do Pleistoceno Superior,
          cerca de 300 mil anos atrás. O sequenciamento de DNA e estudos.
        </p>

        <img className="img2" src={lobo2} alt="lobo2" />

        <p>
          O peso e tamanho dos lobos variam muito em todo o mundo, tendendo a
          aumentar proporcionalmente com a latitude, como previsto pela teoria
          de Christian Bergmann. Em geral, a altura, medida a partir dos ombros,
          varia de 60 a 95 centímetros.
        </p>
        <p>
          O peso varia geograficamente. Em média, os lobos europeus pesam 38,5
          kg; os lobos da América do Norte, 36 kg; os lobos indianos e árabes,
          25 kg. Embora raros, lobos com mais de 77 kg foram encontrados no
          Alasca, Canadá, e na antiga União Soviética.
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

        <img className="col-wide" src={touro3} alt="touro3" />
      </main>
      <Anuncios />
      <Footer />
    </div>
  );
}

export default Vaca;
