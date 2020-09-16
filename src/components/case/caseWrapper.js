import React, { useEffect } from 'react'

import CaseHeader from './caseHeader'
import CaseInfo from './caseInfo'
import CaseImage from './caseImage'
import CaseBody from './caseBody'

const CaseWrapper = (props) => {
    let slide = props.slide;
    return (
        <div className="case">
            <div className="container">
                <CaseHeader slide />
                <CaseInfo slide />
                <CaseImage slide />
                <CaseBody slide />
            </div>
        </div>
    )
}

export default CaseWrapper;