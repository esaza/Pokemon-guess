import React from 'react';
import '../styles/pokemonRegion.scss'

function PokemonRegion({ pokemonID }) {

    /**
     * Función para ver la región del pokémon
     * @returns devuelve la región del pokemon
     */
    function seeGeneration() {
        switch (true) {
            case pokemonID >= 1 && pokemonID <= 151:
                return 'Kanto';
            case pokemonID >= 152 && pokemonID <= 251:
                return 'Johto';
            case pokemonID >= 252 && pokemonID <= 386:
                return 'Hoenn';
            case pokemonID >= 387 && pokemonID <= 493:
                return 'Sinnoh';
            case pokemonID >= 494 && pokemonID <= 649:
                return 'Unova';
            case pokemonID >= 450 && pokemonID <= 721:
                return 'Kalos';
            case pokemonID >= 722 && pokemonID <= 807:
                return 'Alola';
            case pokemonID >= 810 && pokemonID <= 898:
                return 'Galar';
            case pokemonID >= 899 && pokemonID <= 905:
                return 'Hisui';
            case pokemonID >= 906 && pokemonID <= 1010:
                return 'Paldea';
            default:
                return null;
        }
    }

    return (
        <div className='region'>
            {/* Llama a la función seeGeneration para obtener el resultado */}
            Region: {seeGeneration()}
        </div>
    );
}

export default PokemonRegion;
