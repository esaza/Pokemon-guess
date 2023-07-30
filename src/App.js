import './App.css';
import GameStatsLeft from './components/GameStatsLeft';
import GameStatsRight from './components/GameStatsRight';
import Navbar from './components/Navbar';
import PokemonAPIComponent from './components/PokemonAPIComponent';
import React, { useState } from 'react';

function App() {
  const [record, setRecord] = useState(0);
  const [hits, setHits] = useState(0);
  const [failures, setFailures] = useState(0);
  return (
    <>
    <Navbar></Navbar>
      <div className='game-title'>
        <GameStatsLeft hits={hits} failures={failures}></GameStatsLeft>
        <div className='game-box'>
        <PokemonAPIComponent
            hits={hits}
            setHits={setHits}
            failures={failures}
            setFailures={setFailures}
            record={record}
            setRecord={setRecord}
          ></PokemonAPIComponent>
        </div>
        <GameStatsRight record={record}></GameStatsRight>
      </div>
    </>
  );
}

export default App;
