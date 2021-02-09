import React, { useEffect, useState, useMemo } from 'react'
import './CardBoard.scss'
import { images } from './data.js'
import FrontCard from '../FrontCard/FrontCard'
import '../../animations/animate'
import { cardAnimation, letsPlayAnimation } from '../../animations/animate'

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

    function refreshPage() {
        window.location.reload();
    }


    //Style

    useEffect(() => {
        letsPlayAnimation()
    }, [])


    const spawnGrid = () => {
        setHide(false)
        cardAnimation()

    }



    return (
        <div className="cardboard">
            <h3 className={` lp ${hide === false ? 'puff' : ''}`}>Let's <span className="play" onClick={() => spawnGrid()}>play</span></h3>
            <div className={`cards_grid ${hide === true ? 'puff' : ''}`}>
                {
                    pairCard
                        .map((img, index) => {

                            let flipCard = true

                            if (cardStatus.includes(index)) {
                                flipCard = false
                            }

                            if (matchedCard.includes(img.id)) {
                                flipCard = false
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

            <h4 onClick={() => refreshPage()} className={`reset ${hide === true ? 'puff' : ''}`}>Reset</h4>
        </div>

    )
}
