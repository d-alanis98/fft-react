import React from 'react';
import { Link } from 'react-router-dom';
//Estilos
import './Navbar.css';

const Navbar = () => (
    <nav className='navbar navbar-expand-lg sticky-top navbar-light bg-transparent'>
        <Link className='navbar-brand' to='/'>Práctica 3</Link>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarText' aria-controls='navbarText' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse text-center' id='navbarText'>
            <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
                <Link className='nav-link' to='/start'>Inicio</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to='/preview'>Preview</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to='/result'>Resultado</Link>
            </li>
            </ul>
        </div>
    </nav>
);

export default Navbar;