import React from "react";
import './Pokecard.css'

function Pokecard({ pokeInfo }) {
    return (
        <div className="Pokecard">
            <h1>{ pokeInfo.name }</h1>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeInfo.id}.png`}
                alt={pokeInfo.name}></img>
            <p>type: {pokeInfo.type}</p>
            <p>EXP: {pokeInfo.base_experience}</p>
        </div>
    )
}

export default Pokecard;