import React, { useRef, useEffect } from 'react'
import './Title.scss'
import { hoverLink, hoverExit } from '../../animations/animate'
import gsap from "gsap"
import { CSSPlugin } from "gsap"
gsap.registerPlugin(CSSPlugin);

export default function Title() {


    let title = useRef(null)
    let span = useRef(null)

    useEffect(() => {
        gsap.from(title, { duration: 1, opacity: 0, x: -250, ease: "Power3.inOut" })
        gsap.to(title, { duration: 1, opacity: 1, x: 0, ease: "Power3.inOut" })
        gsap.to(span, { duration: 2, opacity: 0, x: -250, ease: "Power3.inOut" })
        gsap.to(span, { duration: 2, opacity: 1, x: 0, ease: "Power3.inOut" })
    }, [])



    return (
        <div ref={el => title = el} className="cardboard_container">
            <span ref={el => span = el}
                onMouseEnter={(e) => hoverLink(e)}
                onMouseLeave={(e) => hoverExit(e)}
                className="cc-blue">memory</span>

            <span onMouseEnter={(e) => hoverLink(e)}
                onMouseLeave={(e) => hoverExit(e)} className="cc-black">just for fun</span>
        </div>
    )
}
