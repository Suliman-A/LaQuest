import React from 'react'
import './Header.css'

function Header() {
    return (
        <div>
           <div className='logo'>LaQiest Inc</div>
            <div className='toggle'></div>
            <div className='navigation'>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="work.html">Work</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul> 
            </div>
        </div>
    )
}

export default Header
