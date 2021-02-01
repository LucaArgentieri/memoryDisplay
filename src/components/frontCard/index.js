import React, { useEffect, useState } from 'react'
import BackCard from '../backCard'

export default function FrontCard({ image, flipCard, handleFlip }) {
    const [win, setWin] = useState(false)

    const flipped = document.querySelectorAll('.flipped')

    useEffect(() => {


        if (flipped.length === 12) {
            console.log('gg')
            setWin(true)
        }

    }, [flipped])


    if (win) {
        return (
            <h1>gg!</h1>
        )
    } else {
        return (
            <div onClick={handleFlip} className={`card ${flipCard ? 'flipped disabled' : ''}`}>
                <div className="inner">
                    <div className="front">
                        <img src={image} alt="name" />
                    </div>

                    <BackCard />
                </div>
            </div>
        )
    }



}
