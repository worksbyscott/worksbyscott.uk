import React from 'react'

export default caseInfo = (props) => {

    let slide = props.slide;

    return (
        <div className="case-info">
            <div className="row">
                <div className="background">
                    <p>{slide.information}</p>
                </div>
                <div className="states">
                    <div className="state-row">
                        <h3 className="label">Tools:</h3>
                        <h3 className="title">{slide.tools}</h3>
                    </div>
                    <div className="state-row">
                        <h3 className="label">Client:</h3>
                        <h3 className="title">{slide.client}</h3>
                    </div>
                    <div className="state-row">
                        <h3 className="label">Type:</h3>
                        <h3 className="title">{slide.type}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}


