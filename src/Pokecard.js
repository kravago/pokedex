import React from "react";

function Pokecard({ pokeInfo }) {
    return (
        <div>
            <h1>{ pokeInfo.name }</h1>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeInfo.id}.png`}></img>
        </div>
    )
}

export default Pokecard;