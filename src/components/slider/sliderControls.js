import React, { useEffect } from 'react'
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';

const SliderControls = ({ currentSlide, updateSlide, currentIndex, slides }) => {

    const name = currentSlide['name'];
    const description = currentSlide['description'];
    const route = currentSlide['route'];

    return (
        <>
            <div className="slide-title">
                <h3 className="label">Project:</h3>
                <Link to={route}>
                    <h3 className="title">{name}</h3>
                </Link>
            </div>
            <div className="slide-description">
                <h3 className="label">Description:</h3>
                <h3>{description}</h3>
            </div>
            <div className="slide-actions">
                <a onClick={() => updateSlide(-1)}><Icon.ArrowLeft /></a>
                <a onClick={() => updateSlide(+1)}><Icon.ArrowRight /></a>
            </div>
        </>
    )
}

export default SliderControls;