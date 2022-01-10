import React from 'react'
import TrainingImg from '../assets/images/trainings.jpg'
import './TrainingSection.css'

function TrainingSection() {
    return (
        <div className='container trainig'>
            <div className='training-content'>
                <div className='training-header'>
                    <h1>TRAINING</h1>
                    <img src={TrainingImg} alt='trining' className='tringing-img'></img>
                    <h2>ENRICH YOUR WORKFORCE, NEVER GET OUTDATED.</h2>
                    <p>Fill the gaps and bridge the knowledge to the present trends and stay ahead 
                        of your industry through professional upskills training. Enhance your workforce with 
                        skills on digital, analytics, and organizational transformation.
                    </p>
                </div>
                <div className='trainingList-container'>
                    <div className='training-list'>
                        <div className='training-thumbtail'>
                            <p>IT CORPORATE BOOTCAMP</p>
                            <h4>Comprehensive Cross Platform Mobile Apps Development with flutter.</h4>
                            <a href='https://laquest.net/' target='_blank' className='training-btn'>READ MORE</a>
                        </div>
                        <div className='training-thumbtail'>
                            <p>IT CORPORATE BOOTCAMP</p>
                            <h4>Comprehensive Cross Platform Mobile Apps Development with flutter.</h4>
                            <a href='https://laquest.net/' target='_blank' className='training-btn'>READ MORE</a>
                        </div>
                        <div className='training-thumbtail'>
                            <p>IT CORPORATE BOOTCAMP</p>
                            <h4>Comprehensive Cross Platform Mobile Apps Development with flutter.</h4>
                            <a href='https://laquest.net/' target='_blank' className='training-btn'>READ MORE</a>
                        </div>
                        <div className='training-thumbtail'>
                            <p>IT CORPORATE BOOTCAMP</p>
                            <h4>Comprehensive Cross Platform Mobile Apps Development with flutter.</h4>
                            <a href='https://laquest.net/' target='_blank' className='training-btn'>READ MORE</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrainingSection
