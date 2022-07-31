import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css'

const Pokedex =  ({ pokemon }) => {
    return (
        <div className="Pokedex">
            <h1>Pokedex</h1>
            {pokemon.map(p => <Pokecard pokeInfo={p}/>)}
        </div>
    )
}

export default Pokedex;