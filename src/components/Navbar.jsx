import React from 'react'
import '../styles/navbar.scss'

function Navbar() {
    return (
        <nav className="navbar nav-menu">
            <div className="container-fluid">
                <a className="navbar-brand" href='#guess'>
                <img className='logo mg-r mg-l' src={require('../images/navbar/logo.png')} alt='logo'></img>
                Pokemon Guess Game
                </a>
            </div>
        </nav>
    )
}

export default Navbar
