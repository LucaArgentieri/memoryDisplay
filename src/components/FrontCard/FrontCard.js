import React, { useEffect, useState } from 'react'
import Cross from '../../assets/cross.svg'
import { hoverC, removeHoverC, flipCards, animateCard } from '../../animations/animate'

export default function FrontCard({ image, flipCard, handleFlip }) {

    const [win, setWin] = useState(false)

    useEffect(() => {
        animateCard()
    }, [])


    const flipped = document.querySelectorAll('.flipped')

    useEffect(() => {
        if (!flipped.length === 12) {
            setWin(true)
        }
    }, [flipped])


    if (win) {
        return (
            <h1>gg!</h1>
        )
    } else {
        return (
            <div
                onMouseEnter={(e) => hoverC(e)}
                onMouseLeave={(e) => removeHoverC(e)}
                onClickCapture={(e) => flipCards(e)}
                onClick={handleFlip}
                className={`card ${flipCard ? 'flipped' : 'disabled'}`}>

                <div className="inner">
                    <div className="front">
                        <img src={image} alt="name" />
                    </div>

                    <div className="back">
                        <div>
                            <img src={Cross} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }



}
