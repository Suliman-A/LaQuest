import React from 'react'
// import { Link } from 'react-router-dom'
import productImg from '../assets/images/projectImg.png'
import './ProductItem.css'

function ProductItem({
    img = productImg,
    title = 'Project Name',
    desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
}) {
    return (
        <div>
            <a to="/projects" className="projectItem__img">
                <img src={img} alt="project img" />
            </a>
            <div className="projectItem__info">
                <a to="#">
                <h3 className="projectItem__title">{title}</h3>
                </a>
            </div>
        </div>
    )
}

export default ProductItem
