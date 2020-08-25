import gsap from 'gsap';

let tl = gsap.timeline();

export const homeEnter = (completeAnimation) => {

    /*
    tl.from(".intro-text span", 1.8, {
        y: 100,
        ease: "power4.out",
        delay: 1,
        skewY: 7,
        stagger: {
          amount: 0.3
        }
      })
      */
    tl.from('intro-overlay h3 span', 2, {
        y: -70,
        skewY: 7,
        ease: "power4.out",
        stagger: {
            amount: 0.4
        },
    })
        .to(".intro-overlay", 2.6, {
            delay: 4,
            ease: "power4.inOut",
            height: 0
        }).from('.slider', 2.2, {
            y: 600,
            delay: -2,
            ease: "power4.inOut",
        }).from('.logo', 1, {
            y: -20,
            opacity: 0,
            delay: -0.2,
            ease: "power4.inOut",
        }).from(".nav-links a", 1, {
            y: -20,
            opacity: 0,
            ease: "power4.out",
            delay: -0.2,
            stagger: {
                amount: 0.3
            },
            onComplete: completeAnimation
        })

}

export const homeExit = () => {

}