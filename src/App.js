import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import Lobo from "./components/Animais/Lobo";
import Leao from "./components/Animais/Leão";
import Cervo from "./components/Animais/Cervo";
import Gato from "./components/Animais/Gato";
import Abelha from "./components/Animais/Abelha";
import Ovelha from "./components/Animais/Ovelha";
import Touro from "./components/Animais/Vaca";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cervo" component={Cervo} />
          <Route exact path="/abelha" component={Abelha} />
          <Route exact path="/ovelha" component={Ovelha} />
          <Route exact path="/gato" component={Gato} />
          <Route exact path="/lobo" component={Lobo} />
          <Route exact path="/touro" component={Touro} />
          <Route exact path="/leao" component={Leao} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
