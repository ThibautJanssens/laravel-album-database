import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className='navbar-brand' to='/'>Home </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/bands'>Bands </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/albums'>Albums </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/songs'>Songs </Link>
                </li>
            </ul>
            <ul className="navbar-nav lg-float-right">
                <li className="nav-item">
                    <Link className="nav-link" to='/login'>Login </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/signup'>Sign Up</Link>
                </li>
            </ul>
        </div>
    </nav>
)

export default Header
