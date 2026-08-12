import React from 'react'
import './Navbar.css'
import logo from '../../assets/Frame 2 1.png'

const Navbar = () => {
    return (
        <div className='navbar container'>
            <img src={logo} alt="" />
            <ul>
                <li>HOME</li>
                <li>CONTACT</li>
                <li>ABOUT</li>
            </ul>
        </div>
    )
}

export default Navbar
