import { useState, useEffect } from 'react';

const useResize = () => {

    //Checking the window has loaded
    const isClient = typeof window === "object"

    //Getting the size of the inner window and null checking
    const getSize = () => {
        return ({
            width: isClient ? window.innerWidth : undefined,
            height: isClient ? window.innerHeight : undefined,
        })
    }

    //Resize state to be returned - Set to the size of the window
    const [resize, setResize] = useState(getSize)

    const handleResize = () => {
        setResize(getSize());
    }

    useEffect(() => {
        if (isClient)
            window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    })

    return resize;
}

export default useResize;