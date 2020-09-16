
import React, { useLocation } from 'react';

//404 Page
const UnknownPage = () => {


    let location = useLocation();


    return (
        <>
            <h1>Could not find page {location.pathname}</h1>
        </>
    )
}

export default UnknownPage;
