import React, { useState, useEffect } from 'react'
import SliderControls from "./sliderControls"
import SliderImage from "./sliderImage.js"
import { motion } from 'framer-motion';

import { Transitions } from '../../utility/transitions'
import { Slides } from '../../data/slides'
import { changeSlide } from '../../animations/sliderAnimations'

// Slide change animation
const sliderVariants = {
    initial: {
        y: 700,
        opacity: 0
    },
    enter: {
        y: 0,
        opacity: 1
    },
    exit: {
        opacity: 0
    }
}

const Slider = () => {

    const [currentIndex, setCurrentIndex] = useState(1);
    const [isAnimating, setIsAnimating] = useState(false);
    const currentSlide = Slides[currentIndex];

    const updateSlide = (direction) => {
        if (isAnimating) return;
        setIsAnimating(true);

        const updateIndex = () => {
            const nextSlide = (Slides.length + currentIndex + direction) % Slides.length;
            setCurrentIndex(nextSlide);

        }

        const finishAnimation = () => {
            setIsAnimating(false);
        }

        changeSlide(updateIndex, finishAnimation);
    }

    return (
        <motion.div
            key="slider"
            initial={"initial"}
            animate={"enter"}
            exit={"exit"}
            variants={sliderVariants}
            transition={Transitions.ease1}
            className="slider">
            <div className="container">
                <div className="row">
                    <div className="slider-controls">
                        <SliderControls
                            slides={Slides}
                            currentSlide={currentSlide}
                            currentIndex={currentIndex}
                            updateSlide={updateSlide}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="slider-image">
                        <SliderImage
                            index={currentIndex}
                            slides={Slides}
                        />
                        <div className="uncover">
                            <div className="uncover_slice"></div>
                            <div className="uncover_slice"></div>
                            <div className="uncover_slice"></div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>

    )
}

export default Slider;