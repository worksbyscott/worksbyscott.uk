import React from 'react'
import { ReactComponent as ArrowIcon } from '../../assets/arrow-right-circle.svg'

export default caseHeader = (props) => {

    let slide = props.slide;

    caseAction = () => {
        return <a href={slide.link ? slide.link : ""}><ArrowIcon />{(slide.link ? "View Website" : "Coming soon")}</a>
    }

    return (
        <div className="case-header">
            <div className="row">
                <div className="case-title">
                    <h3 className="label">Project:</h3>
                    <h3 className="title">{slide.name}</h3>
                </div>
                <div className="case-action">
                    {caseAction}
                </div>
            </div>
        </div>
    )
}


