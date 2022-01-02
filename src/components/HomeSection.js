import React from 'react'
import './HomeSection.css'
import HomeImg from '../assets/homeImg.jpg'

function HomeSection() {
    return (
        <div className='container home'>
            <img src={ HomeImg } className="home-img" alt="" />
            <div className="home-content">
                <h3>TASKS SIMPLIFIED</h3>
                <h1>
                WE TRANSFORM BUSINESSES <br />
                BEYOND IMAGINATION.
                </h1>
                <a href="contact.html" className="btn">Get Started</a>
            </div>
            <div className="card-container">
                    <div className="feature-card">
                        <div className="feature-card-tilte">
                            <h3>
                                About us
                            </h3>
                        </div>
                        <div className="feature-card-deatails">
                            <i className="fa fa-bank"></i>
                            <h4>About us</h4>
                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
                            <a href="">Read More</a>
                        </div>
                    </div>
                    <div className="feature-card">
                        <div className="feature-card-tilte">
                            <h3>
                                Services
                            </h3>
                        </div>
                        <div className="feature-card-deatails">
                            <i className="fa fa-bank"></i>
                            <h4>Services</h4>
                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
                            <a href="">Read More</a>
                        </div>
                    </div>
                    <div className="feature-card">
                        <div className="feature-card-tilte">
                            <h3>
                                Product
                            </h3>
                        </div>
                        <div className="feature-card-deatails">
                            <i className="fa fa-bank"></i>
                            <h4>Product</h4>
                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
                            <a href="">Read More</a>
                        </div>
                    </div>
                    <div className="feature-card">
                        <div className="feature-card-tilte">
                            <h3>
                                Training
                            </h3>
                        </div>
                        <div className="feature-card-deatails">
                            <i className="fa fa-bank"></i>
                            <h4>Training</h4>
                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
                            <a href="">Read More</a>
                        </div>
                    </div>
                </div>
    </div>
    )
}

export default HomeSection
