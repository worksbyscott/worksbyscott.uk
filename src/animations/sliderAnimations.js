import gsap from 'gsap';

let tl = gsap.timeline();
export const changeSlide = (updateIndex, finishAnimation) => {

    tl.to(".uncover_slice", .6, {
        height: "100%",
        ease: "Power2.easeOut",
        stagger: {
            amount: .3
        },
        onComplete: updateIndex
    })
        .to(".slide-title", 0.2, {
            y: -5,
            delay: -.5,
            opacity: 0,
            ease: "Power2.easeOut"
        })
        .to(".slide-description", 0.2, {
            y: -5,
            delay: -.5,
            opacity: 0,
            ease: "Power2.easeOut"
        })
        .to(".uncover_slice", .6, {
            delay: .6,
            height: "0",
            ease: "Power2.easeOut",
            stagger: {
                amount: .3
            },
            onComplete: finishAnimation
        })
        .to(".slide-title", 0.2, {
            y: 0,
            delay: -.5,
            opacity: 1,
            ease: "Power2.easeOut"
        })
        .to(".slide-description", 0.2, {
            y: 0,
            opacity: 1,
            delay: -.5,
            ease: "Power2.easeOut"
        })



}
