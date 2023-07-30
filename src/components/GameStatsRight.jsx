import React from 'react'
import '../styles/gameStats.scss'

// Componente con el record de aciertos
function GameStatsRight({ record }) {


    return (
        <div className='gamestats-container'>
            <div className='right-stat'>
                <h2>Record</h2>
                <h3 id='record'>{record}</h3>
            </div>
        </div>
    )
}

export default GameStatsRight
