import React from 'react'

export default caseInfo = (props) => {

    let slide = props.slide;

    return (
        <div className="case-image">
            <div className="row">
                <img src={require('../../assets/' + slide.image + '.png')} alt={slide.name} />
            </div>
        </div>
    )
}


