import React, { Component } from "react";
import CardNota from "./cardNota";

class ListaDeNotas extends Component {
    render() {
        // const numbers = [1,2,3,4,5];
        // const listItems = numbers.map((number) => <li>{number}</li>);
        // console.log(listItems);

        // return (
        //     <ul>
        //         {listItems}
        //     </ul>
        // )
        return (
            <ul>

                {Array.of("Trabalho", "Trabalho", "Estudo").map((categoria) => {
                    return (
                        <li>
                            <div>{categoria}</div>
                            <CardNota />
                        </li>
                    );

                })}
            </ul>
        );
    }
}

export default ListaDeNotas;