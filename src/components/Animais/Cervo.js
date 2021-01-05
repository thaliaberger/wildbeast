import React from "react";

import Header from "../Header";
import Nav from "../Nav";
import Anuncios from "../Anuncios";
import Footer from "../Footer";

import cervo1 from "../../images/cervo1.jpg";
import cervo2 from "../../images/cervo3.jpg";
import cervo3 from "../../images/cervo2.jpg";

function Cervo() {
  return (
    <div class="estrutura">
      <Header />
      <Nav />

      <main class="content">
        <div class="titulo">
          <h1>Cervo</h1>
          <span>da família canis lupus</span>
        </div>
        <div class="caracteristicas">
          <div>
            <span class="numero">72</span>
            <span class="rotulo">kg</span>
          </div>
          <div>
            <span class="numero">13</span>
            <span class="rotulo">age</span>
          </div>
        </div>
        <p class="col-wide">
          É um sobrevivente da Era do Gelo, originário do Pleistoceno Superior,
          cerca de 300 mil anos atrás. O sequenciamento de DNA e estudos
          genéticos reafirmam que o lobo cinzento é ancestral do cão doméstico
        </p>

        <img class="img1" src={cervo1} alt="lobo1" />
        <p class="destaque">
          É um sobrevivente da Era do Gelo, originário do Pleistoceno Superior,
          cerca de 300 mil anos atrás. O sequenciamento de DNA e estudos.
        </p>

        <img class="img2" src={cervo2} alt="lobo2" />

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
        <blockquote class="citacao col-wide">
          <p>
            “Há algo no uivar do lobo que tira um homem do aqui e agora e o
            transporta para uma floresta da mente.”
          </p>
        </blockquote>

        <ul class="atributos">
          <li>Surgiu: 12.000 anos</li>
          <li>Tipo: Mamífero</li>
          <li>Idade Média: 13 anos</li>
          <li>Macho adulto: 80kg</li>
          <li>Fêmea adulta: 55kg</li>
          <li>Família: Lupus</li>
        </ul>

        <div class="informacoes">
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

        <img class="col-wide" src={cervo3} alt="lobo3" />
      </main>
      <Anuncios />
      <Footer />
    </div>
  );
}

export default Cervo;
