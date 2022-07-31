import React from 'react';
import Pokecard from './Pokecard';


const Pokedex =  ({ pokemon }) => {
    return (
        <div>{pokemon.map(p => <Pokecard pokeInfo={p}/>)}</div>
    )
}

export default Pokedex;