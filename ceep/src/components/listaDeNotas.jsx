import React, { Component } from "react";
import CardNota from "./CardNota/cardNota";

class ListaDeNotas extends Component {
    render() {
        return (
            <ul>
                {Array.of("Trabalho", "Trabalho", "Estudo").map((categoria, index) => {
                    return (
                        <li key={index}>
                            <CardNota />
                        </li>
                    );

                })}
            </ul>
        );
    }
}

export default ListaDeNotas;