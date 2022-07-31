import React from 'react';
import Pokedex from './Pokedex'
import pokemonArr from './pokemon';

const App = () => {
    return (
        <div>
            <Pokedex pokemon={pokemonArr}/>
        </div>
    )
}

export default App;