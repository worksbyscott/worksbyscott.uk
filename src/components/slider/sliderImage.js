import React from 'react'
import { Link } from 'react-router-dom';

const SliderImage = ({ index, slides, old }) => {

    const slide = slides[index];
    const route = slide['route'];

    return (
        <>
            <Link to={route}>

                <img className={(old && "slider-old")} src={require('../../assets/' + slide['image'] + '.png')} alt="cella" />
            </Link>
        </>
    )
}

export default SliderImage;