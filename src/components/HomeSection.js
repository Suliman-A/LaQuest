import React from 'react'
import './HomeSection.css'
import HomeImg from '../assets/homeImg.jpg'

function HomeSection() {
    return (
        <div className='container home'>
            <div className="home-content">
                <h3>TASKS SIMPLIFIED</h3>
                <h1>
                WE TRANSFORM BUSINESSES <br />
                BEYOND IMAGINATION.
                </h1>
                <a href="contact.html" className="btn">Get Started</a>
            </div>
            <div className="home-img">
            <img src='https://canopuslab.com/images/news/Canopus_Build_vs_buy_software_800.png'  alt="" />    
            </div>      
    </div>
    )
}

export default HomeSection
