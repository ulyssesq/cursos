import FormularioCadastro from "./components/formularioCadastro";
import ListaDeNotas from "./components/listaDeNotas";
import React, { Component } from 'react';

class App extends Component {
  render(){
    return (
      <section>
        <FormularioCadastro />
        <ListaDeNotas />
      </section>
    );
  }
}

export default App;
