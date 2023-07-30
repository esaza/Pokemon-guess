import React from 'react'
import '../styles/pokemonTypes.scss'

function PokemonTypes({ pokemonTypes }) {

    // Mapear cada tipo de pokémon en el array de "pokemonTypes"
    const arrayTypes = pokemonTypes.map((type) => {
        switch (type.type.name) {

            // En el caso de cada tipo mostrará imagen de los tipos que se encuentren
            case type.type.name:
                return <img className="type" key={type.type.name} // Agregar el atributo key con un valor único (en este caso, el nombre del tipo)
                    src={require('../images/types/' + type.type.name + '.png')}
                    alt={type.type.name} />;
            default:
                return null;
        }
    });

    return (
        <div>{arrayTypes}</div>
    )
}

export default PokemonTypes
