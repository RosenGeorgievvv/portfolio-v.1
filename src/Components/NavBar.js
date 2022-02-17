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
                        <NavLink to="/portfolios" exact='portfolios' className={({ isActive }) => (isActive ? "active-style" : 'none')} >
                            Portfolios
                        </NavLink>
                    </li>

                    <li className='nav-item'>
                        <NavLink to="/blogs" exact='blogs' className={({ isActive }) => (isActive ? "active-style" : 'none')} >
                            Blogs
                        </NavLink>
                    </li>

                    <li className='nav-item'>
                        <NavLink to="/contacts" exact='contacts' className={({ isActive }) => (isActive ? "active-style" : 'none')} >
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <footer className='footer'>
                    <p>
                        Made by Rosen Georgiev &copy @2022
                    </p>
                </footer>
            </nav>


        </div>
    )
}

export default NavBar