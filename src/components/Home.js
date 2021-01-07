import React from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import Animais from "./Animais";

function Home() {
  return (
    <div className="estrutura2">
      <Header />
      <Animais />
    </div>
  );
}

export default Home;
