import React, { useState, useEffect } from 'react';
import InputPokemon from './InputPokemon';
import '../styles/pokemonAPI.scss';
import PokemonTypes from './PokemonTypes';
import PokemonRegion from './PokemonRegion';

function PokemonAPIComponent({ hits, setHits, failures, setFailures, record, setRecord }) {

  // Estados del componente
  const [pokemonData, setPokemonData] = useState(null);
  const [guess, setGuess] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [shiny, setShiny] = useState(false);
  const [disabledInput, setDisabledInput] = useState(null);
  const [randomSprite, setRandomSpite] = useState(Math.floor(Math.random() * (3 - 1) + 1));

  // useEffect que se ejecutará solamente en el primer renderizado
  useEffect(() => {
    fetchPokemon();
  }, []);

  // useEffect para reiniciar los valores de la adivinanza y de si el pokémon es shiny o no cuando "pokemonData" cambie. 
  useEffect(() => {
    setGuess(false);
    setShiny(false);

    // Por cada nueva adivinanza se cambiará el sprite del Pokémon
    setRandomSpite(Math.floor(Math.random() * (3 - 1) + 1));
  }, [pokemonData]);

  // Función asincrónica para obtener datos de un Pokemon aleatorio desde la PokeAPI
  const fetchPokemon = async () => {
    let pokemonRandom = Math.floor(Math.random() * (1010 - 1) + 1);

    // Controlodor de excepciones
    try {
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon/' + pokemonRandom.toString()
      );

      // Convertir la respuesta recibida de la API a un objeto con formato "JSON"
      const data = await response.json();

      // Guardar un objeto dentro de un estado
      setPokemonData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  /**
   * Función que valida si el nombre recibido por el input es el nombre del pokemon a adivinar
   */
  function validador() {
    if (inputValue.toLowerCase().replace(" ", "-").trim() === pokemonData.name.toLowerCase()) {
      setGuess(true);
      setHits(hits + 1);
      if (hits >= record) {
        setRecord(record + 1);
      }
      setDisabledInput(true);
    } else {
      setGuess(false);
      setFailures(failures + 1);
      setHits(0);
    }
  }

  /** 
   * Función para manejar el cambio en el texto
   * del input.
   * @param {} event 
   */
  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  /**
   * Función que al pulsar a la tecla "Enter" despues
   * de haber escrito en el input comprueba si lo que 
   * se ha escrito es igual al nombre de pokémon a a-
   * divinar.
   * @param {key} event 
   */
  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      validador();
    }
  }

  /**
   * Función para cambiar al siguiente pokémon
   */
  function handleNextPokemon() {
    fetchPokemon();
    setInputValue("");
    setDisabledInput(false);
  }

  /**
   * Función para cambiar la imagen del pokemon
   * definiendo si es shiny o no (shiny = variocolor)
   */
  function viewShiny() {
    setShiny(!shiny);
  }

  /**
   * Estilos para ocultar y mostrar la imagen del pokémon
   */
  const hidden = {
    filter: 'brightness(0)',
    pointerEvents: 'none',
  };
  const visible = {
    filter: 'brightness(1)',
    pointerEvents: 'none',
  };

  /**
   * Estilos para el boton shiny
   */
  const shinyButtonOn = {
    backgroundColor: 'rgba(0, 0, 0, 0.367)',
    borderRadius: '10px',
    border: 0
  };

  return (
    <div className='pokemonContainer'>

      {/* Si aun no encuentra ningún pokémon, mostrará un mensaje de "loading..." */}
      {pokemonData ? (
        <>
          <div className='pokemonBox'>
            <h2 className='whosThat'>Who's That Pokémon?</h2>
            <img
              // Si el pokémon aun no ha sido adivinado mostrará solo su silueta  
              style={guess ? visible : hidden}

              // Dependiendo del número random mostrará el pokemon con pixeles o con diseño original
              src={randomSprite > 1 ?
                (shiny ? pokemonData.sprites.front_shiny : pokemonData.sprites.front_default)
                : (shiny ? pokemonData.sprites.other['official-artwork'].front_shiny : pokemonData.sprites.other['official-artwork'].front_default)}
              alt={pokemonData.name}
            />
            {/* Depende de la acción del botón de abajo mostrará la forma normal o la shiny.*/}
            {/* Si el pokémon aun no ha sido adivinado aun no se podrá ver su forma shiny */}
            <button className='shinyBtn' onClick={viewShiny} style={shiny ? shinyButtonOn : null} disabled={guess ? false : true}>✨</button>
            <div className='pokemonClue'>
              <PokemonRegion pokemonID={pokemonData.id}></PokemonRegion>
              <PokemonTypes pokemonTypes={pokemonData.types}></PokemonTypes>
            </div>
          </div>
        </>
      ) : (
        <p>Loading data...</p>
      )}

      {/* Componente del input */}
      <InputPokemon
        onKeyPress={handleKeyPress}
        onChange={handleInputChange}
        handleNextPokemon={handleNextPokemon}
        disabled={disabledInput}
        value={inputValue}
        guessed={guess}
      />
    </div>
  );
}

export default PokemonAPIComponent;
