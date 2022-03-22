import React from 'react'
import avatar from '../img/avatar.jpg'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <div className='NavBar'>

            <nav className='nav'>
                <div className='profile'>
                    <img src={avatar} alt="" />
                </div>
                <ul className='nav-items'>
                    <li className='nav-item'>
                        <NavLink to="/" exact='home' className={({ isActive }) => (isActive ? "active-style" : 'none')} >
                            Home
                        </NavLink>
                    </li>

                    <li className='nav-item'>
                        <NavLink to="/about" exact='about' className={({ isActive }) => (isActive ? "active-style" : 'none')} >
                            About
                        </NavLink>
                    </li>

                    <li className='nav-item'>
                        <NavLink to="/portfolio" exact='portfolio' className={({ isActive }) => (isActive ? "active-style" : 'none')} >
                            Portfolio
                        </NavLink>
                    </li>

                    <li className='nav-item'>
                        <NavLink to="/contacts" exact='contacts' className={({ isActive }) => (isActive ? "active-style" : 'none')} >
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <footer className='footer'>

                </footer>
            </nav>


        </div>
    )
}

export default NavBar