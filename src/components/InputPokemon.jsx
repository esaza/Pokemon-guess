import React from 'react'
import '../styles/inputPokemon.scss'
import './PokemonAPIComponent'

// Componente del input
function InputPokemon({ onKeyPress, onChange, handleNextPokemon, disabled, value, guessed }) {

    return (
        <div className="input-container">
            <input id="pokemonInput" className="input" name="text" type="text"
                placeholder='Type here...' onKeyPress={onKeyPress} onChange={onChange} disabled={disabled} value={value}/>
                {/* Obligaremos al usuario a adivinar el pokémon */}
            <button className='nextButton' onClick={handleNextPokemon} disabled={guessed ? false : true}> NEXT ➤</button> {/* Agregar el botón */}
        </div>
    )
}

export default InputPokemon
