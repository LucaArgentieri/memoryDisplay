import React, { useEffect, useLayoutEffect, useRef } from 'react'
import Cross from '../../assets/cross.svg'
import gsap, { CSSPlugin } from "gsap"
gsap.registerPlugin(CSSPlugin)

export default function FrontCard(props) {

    const card = useRef()
    const cardInner = useRef()

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
            onClick={props.sameCheck}
            onClickCapture={props.clicked}
            className={`card ${props.clicked ? '' : ''}`}>
            <div ref={cardInner} className={`card-inner`}>
                <div className={`card-back`}>
                    <img src={props.image}
                        alt="name" />
                </div>
                <div className={`card-front ${props.clicked ? 'disabled' : ''}`}>
                    <img src={Cross} alt="" />
                </div>
            </div>
        </div>


    )



}
