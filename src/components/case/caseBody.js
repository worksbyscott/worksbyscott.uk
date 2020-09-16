import React from 'react'

export default caseBody = (props) => {

    let slide = props.slide;

    return (
        <div className="case-body">
            <div className="row">
                {slide.content.map(image => {
                    <img src={require('../../assets/' + image + '.png')} alt={slide.name} />
                })}
            </div>
        </div>
    )
}


