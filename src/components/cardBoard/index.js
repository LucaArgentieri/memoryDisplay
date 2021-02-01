import React, { useEffect, useState, useMemo } from 'react'
import './style.css'
import { images } from './data.js'
import FrontCard from '../frontCard'



export default function CardBoard() {

    const [cardStatus, setCardStatus] = useState([])
    const [matchedCard, setMatchedCard] = useState([])
    const [hide, setHide] = useState(true)



    const pairCard = useMemo(() => [...images], []);

    useEffect(() => {

        const firstMatch = pairCard[cardStatus[0]]
        const secondMatch = pairCard[cardStatus[1]]


        if (secondMatch && firstMatch.id === secondMatch.id) {
            setMatchedCard([...matchedCard, firstMatch.id])
        }


        if (cardStatus.length === 2) {
            setTimeout(() => {
                setCardStatus([])
            }, 1000)
        }



    }, [cardStatus, matchedCard, pairCard])

    const handleFlip = (index) => {
        setCardStatus((opened) => [...opened, index])

    }

    const spawnGrid = () => {
        setHide(false)
    }

    function refreshPage() {
        window.location.reload();
    }



    return (
        <div className="cardboard">
            <h3 className={`${hide === false ? 'puff' : ''}`}>Let's <span onClick={() => spawnGrid()}>play</span></h3>
            <div className={`cards_grid ${hide === true ? 'puff' : ''}`}>
                {
                    pairCard
                        .map((img, index) => {

                            let flipCard = false

                            if (cardStatus.includes(index)) {
                                flipCard = true
                            }

                            if (matchedCard.includes(img.id)) {
                                flipCard = true
                            }

                            return (

                                <FrontCard
                                    key={index}
                                    image={img.img}
                                    flipCard={flipCard}
                                    handleFlip={() => handleFlip(index)}
                                />)


                        })
                }
            </div>

            <h4 onClick={() => refreshPage()} className={` ${hide === true ? 'puff' : ''}`}>Reset</h4>
        </div>

    )
}
