import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link classNameName='navbar-brand' to='/'>Home </Link>
                </li>
                <li className="nav-item">
                    <Link to='/bands'>Bands </Link>
                </li>
                <li className="nav-item">
                <Link to='/albums'>Albums </Link>
                </li>
                <li className="nav-item">
                <Link to='/songs'>Songs </Link>
                </li>
                <li className="nav-item">
                <Link to='/contact'>Contact Us </Link>
                </li>
            </ul>
            <ul class="navbar-nav lg-float-right">
                <li class="nav-item">
                    <Link to='/login'>Login </Link>
                </li>
                <li class="nav-item">
                    <Link to='/signup'>Sign Up</Link>
                </li>
            </ul>
        </div>
    </nav>
)

export default Header
