import React from 'react'
import '../styles/gameStats.scss'

// Componente con los aciertos y fallos
function GameStatsLeft( { hits, failures }) {


    return (
        <div className='gamestats-container'>
            <div className='left-stat'>
                <h2>hits</h2>
                <h3 id='hits'>{hits}</h3>
            </div>

            <div className='left-stat'>
                <h2>failures</h2>
                <h3 id='failures'>{failures}</h3>
            </div>
        </div>
    )
}

export default GameStatsLeft
