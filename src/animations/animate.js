import gsap from "gsap"

export const hoverLink = e => {
    gsap.to(e.target, {
        duration: 0.4,
        y: 3,
        skewX: 4,
        ease: "power3.inOut"
    });
};

export const hoverExit = e => {
    gsap.to(e.target, {
        duration: 0.4,
        y: 0,
        skewX: 0,
        ease: "power3.inOut"
    });
};
export const hoverC = e => {
    gsap.to(e.target, {
        duration: 0.4,
        scale: 1.05,
    })
}
export const removeHoverC = e => {
    gsap.to(e.target, {
        duration: 0.3,
        scale: 1
    })
}

// export const flipCards = e => {
//     gsap.to(e.target, {
//         duration: 0.4,
//         rotateY: 180
//     })
// }

// export const reFlipCards = e => {
//     gsap.to(e.target, {
//         duration: 0.4,
//         rotateY: 0
//     })
// }

