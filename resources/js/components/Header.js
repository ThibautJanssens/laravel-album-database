import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li>
                    <Link className='navbar-brand' to='/'>Home </Link>
                </li>
                <li>
                    <Link className='nav-item' to='/newAlbum'>Create Album</Link>
                </li>
                <li>
                    <Link className='nav-item' to='/Albums'>All Albums</Link>
                </li>
                {/* <li className="nav-item">
                    <Link className="nav-item" to='/bands'>Bands </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-item" to='/albums'>Albums </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-item" to='/songs'>Songs </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-item" to='/contact'>Contact Us </Link>
                </li> */}
            </ul>
            <ul className="navbar-nav lg-float-right">
                <li className="nav-item">
                    <Link className="nav-item" to='/login'>Login </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-item" to='/signup'>Sign Up</Link>
                </li>
            </ul>
        </div>
    </nav>
)

export default Header
