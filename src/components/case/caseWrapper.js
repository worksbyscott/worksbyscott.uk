import React from 'react'
import { ReactComponent as ArrowIcon } from '../../assets/arrow-right-circle.svg'
import { Slides, getSlideByName } from '../../data/slides'


const CaseWrapper = (index) => {

    const slide = Slides[index];

    let actionString = "View Website";

    const caseAction = () => {
        if (slide.link) {
            if (slide.link.includes("github")) {
                actionString = "View Github"
            } else if (slide.link.includes("behance")) {
                actionString = "View Behance"
            }
            return <a href={slide.link}>{actionString} <ArrowIcon /></a>
        }
        return <a href="/" className='inactive'>Coming soon <ArrowIcon /></a>
    }

    return (
        <div className="case">
            <div className="container">
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
                <div className="case-image">
                    <div className="row">
                        <img src={require('../../assets/' + slide.image + '.png')} alt={slide.name} />
                    </div>
                </div>
                <div className="case-body">
                    <div className="row">

                    </div>
                </div>
            </div>

        </div>
    )
}

export default CaseWrapper;