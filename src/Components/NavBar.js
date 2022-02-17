import React from 'react'
import personal from '../img/personal.jpg'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <div className='NavBar'>
            <div className='profile'>
                <img src={personal} alt="" />
            </div>
            <nav className='nav'>
                <ul className='nav-items'>
                    <li className='nav-item'>
                        <NavLink to="/" exact='home' className={({ isActive }) => (isActive ? "active-style" : 'none')} >
                            Home
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar