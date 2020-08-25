import React, { useState, useEffect } from 'react'
import SliderControls from "./sliderControls"
import SliderImage from "./sliderImage.js"
import gsap from 'gsap';
import { Slides } from '../../data/slides'
import { changeSlide } from '../../animations/sliderAnimations'

// Slide change animation


const Slider = () => {

    const [currentIndex, setCurrentIndex] = useState(1);
    const [isAnimating, setIsAnimating] = useState(false);
    const currentSlide = Slides[currentIndex];




    //Slide tranistion animation and index change
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


    // Slides through the case studies with interval SLIDE_UPDATE_INTERVAL






    return (
        <div className="slider">
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
        </div>

    )
}

export default Slider;