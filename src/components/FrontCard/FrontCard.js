import React, { useLayoutEffect, useRef } from 'react'
import Cross from '../../assets/cross.svg'
import gsap, { CSSPlugin } from "gsap"
gsap.registerPlugin(CSSPlugin)

export default function FrontCard({ image, sameCheck, disabled, clicked }) {

    const card = useRef()


    const mouseHover = () => {
        gsap.from([card.current], {
            scale: 1,
        })
        gsap.to([card.current], {
            scale: 1.1,
        })
    }

    const mouseLeaveHover = () => {
        gsap.to([card.current], {
            scale: 1,
            duration: 1
        })
    }




    useLayoutEffect(() => {
        mouseHover()
        mouseLeaveHover()
    }, [])

    return (

        <div ref={card}
            onMouseOver={mouseHover}
            onMouseLeave={mouseLeaveHover}
            onClick={sameCheck}
            className={`card ${disabled ? '' : ''}`}>
            <div onClick={clicked} className={`card-inner  ${clicked ? 'flip' : ''}`}>
                <div className="card-back">
                    <img src={image}
                        alt="name" />
                </div>
                <div className="card-front">
                    <img src={Cross} alt="" />
                </div>
            </div>
        </div>


    )



}
