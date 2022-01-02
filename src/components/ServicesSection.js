import React from 'react'
import './ServicesSection.css'
import serviceImg from '../assets/download.png'

function ServicesSection() {
    return (
        <div className='container services'>
            <div className='services-header'>      
                    <h4>SERVICES</h4>
                    <h2>CROSS-PLATFORM DEVELOPMENT</h2>
                    <p>We offer a full spectrum of software development to help organizations stay up with the technological trends 
                        and allow flexibility to manage the increased demand of business operations.
                    </p>
            </div>
                <div className='services-container'>
                        <div className='services-list-container'>
                            <div className='services-thumbnail'>
                                <div className='services-img'>
                                    <img src={ serviceImg } alt=''></img>
                                </div>
                                <div className='services-title'>
                                    <h5>COSTUM DESIGN SOLUTION</h5>
                                </div>
                            </div>
                            <div className='services-thumbnail'>
                                <div className='services-img'>
                                    <img src={ serviceImg } alt=''></img>
                                </div>
                                <div className='services-title'>
                                    <h5>COSTUM DESIGN SOLUTION</h5>
                                </div>
                            </div>
                            <div className='services-thumbnail'>
                                <div className='services-img'>
                                    <img src={ serviceImg } alt=''></img>
                                </div>
                                <div className='services-title'>
                                    <h5>COSTUM DESIGN SOLUTION</h5>
                                </div>
                            </div>
                            <div className='services-thumbnail'>
                                <div className='services-img'>
                                    <img src={ serviceImg } alt=''></img>
                                </div>
                                <div className='services-title'>
                                    <h5>COSTUM DESIGN SOLUTION</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>       
    )
}

export default ServicesSection
