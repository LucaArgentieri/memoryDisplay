import React, { useLayoutEffect, useRef } from 'react'
import Cross from '../../assets/cross.svg'
// https://www.npmjs.com/package/react-draggable
import Draggable, { DraggableCore } from 'react-draggable';
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

    const dragClick = () => {
        console.log('dragga')
    }


    useLayoutEffect(() => {
        mouseHover()
        mouseLeaveHover()
    }, [])

    return (
        <Draggable
            handle={'.card' || '.card-inner'}
            position={null}
        >

            <div ref={card}
                onMouseDown={() => dragClick()}
                onMouseOver={mouseHover}
                onMouseLeave={mouseLeaveHover}
                onClick={props.sameCheck}
                onClickCapture={props.clicked}
                className={`card`}>
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



        </Draggable>

    )



}
