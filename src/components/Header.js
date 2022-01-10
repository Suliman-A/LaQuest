import React from 'react'
import './Header.css'

function Header() {
    return (
        <div>
           <div className='logo'>LaQiest Inc</div>
            <div className='toggle'></div>
            <div className='navigation'>
                <ul>
                    <li><a href="https://laquest.net/">Home</a></li>
                    <li><a href="https://laquest.net/">Services</a></li>
                    <li><a href="https://laquest.net/">Work</a></li>
                    <li><a href="https://laquest.net/">Contact</a></li>
                </ul> 
            </div>
        </div>
    )
}

export default Header
