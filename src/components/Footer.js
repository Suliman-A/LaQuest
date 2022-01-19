import React from 'react'
import footerImg from '../assets/images/laquest_logo.png'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-brand'>
                <img src={footerImg} alt='logo'></img>
            </div>
            <p>Copyright © 2021 LaQuest Inc. All rights reserved.</p>
        </div>
    )
}

export default Footer
