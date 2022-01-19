import React from 'react'
import footerImg from '../assets/images/laquest_logo.png'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-brand'>
                <img src={footerImg} alt='logo'></img>
            </div>
           
        </div>
    )
}

export default Footer
