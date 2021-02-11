import React, { useEffect, useState, useRef } from 'react'
import './CardBoard.scss'
import { images } from './data.js'
import FrontCard from '../FrontCard/FrontCard'
import { shuffle } from './shuffle'
import gsap from "gsap"



export default function CardBoard() {


    const [cards, setCards] = useState((images))
    const [flippedCards, setFlippedCards] = useState([])
    const [sameCards, setSameCards] = useState([])
    const [hide, setHide] = useState(true)
    const [cardStatus, setCardStatus] = useState(false)


    useEffect(() => {
        shuffle(images)
    }, [])

    // Logica Memory
    function sameCheck(e) {
        let cards = flippedCards
        let sCards = sameCards
        cards.push(e.id)
        setFlippedCards(cards)

        if (flippedCards.length === 2) {

            if (flippedCards[0] === flippedCards[1]) {
                setFlippedCards([])
                sCards.push(e.id)
                setCardStatus(true)
                setSameCards(sCards)

                console.log(sameCards)

            } else {
                setFlippedCards([])
            }


        }
    }





    //Style
    const clicked = (e, img) => {
        const element = e.target.parentNode
        const parentElement = e.target
        console.log(element)
        console.log(img)

        gsap.to(parentElement, {
            // duration: 1,
            css: {
                rotateY: 180
            }

        })

        gsap.to(element, {
            css: {
                className: '+=disabled'
            }
        })


        if (flippedCards[0] !== flippedCards[1]) {
            setTimeout(() => {
                gsap.to(".card-inner", {
                    duration: 1,
                    rotateY: 0
                })
                gsap.to(element, {
                    css: {
                        className: '+=card'
                    }
                })
            }, 2000);
        }

        //if(img.id)

        gsap.to(element, {
            css: {
                className: '+=card'
            }
        })

    }


    const cardsStugger = () => {
        resetAnimation()

        gsap.from(".card", {
            duration: 1.5,
            scale: 1,
            x: "150vh",
            ease: "power3.inOut",
            stagger: {
                from: "right",
                amount: 1
            }
        });
    }

    const resetAnimation = () => {
        gsap.from(".reset", {
            duration: 1.5,
            opacity: 0,
            y: 200,
            ease: "power3.inOut"
        });
    }

    const clickedReset = () => {
        const tl = gsap.timeline()
        tl.to(".card", {
            duration: 1,
            scale: 1,
            x: "-100vw",
            ease: "power3.inOut",
            stagger: {
                from: "right",
                amount: 1
            }
        });
        gsap.to(".reset", {
            duration: 1.5,
            opacity: 1,
            y: 500,
            ease: "power3.inOut"
        });

        tl.to(".card", {
            duration: 0,
            scale: 1,
            x: "100vw",
            ease: "power3.inOut",
            stagger: {
                from: "left",
                amount: 1
            }
        });
        tl.to(".card", {
            duration: 0.5,
            scale: 1,
            x: 0,
            ease: "power3.inOut",
            stagger: {
                from: "left",
                amount: 1
            }
        });
        gsap.from(".reset", {
            duration: 1.5,
            rotationY: 180,
            opacity: 1,
            y: 0,
            ease: "power3.inOut"
        });
    }


    useEffect(() => {
        gsap.from(".lp", {
            duration: 2,
            opacity: 0,
            ease: "power3.inOut"
        });
        gsap.from(".play", {
            duration: 2,
            opacity: 0,
            ease: "power3.inOut"
        });

    }, [])


    const spawnGrid = () => {
        setHide(false)
    }
    function refreshCards() {
        setCards(shuffle(images))
        clickedReset()
    }


    //Stato di vittoria
    if (sameCards.length === 6) {
        return <div>
            <h1>Gg</h1>
        </div>

        //Gioco
    } else {
        return (
            <div className="cardboard">
                <h3 onClick={() => cardsStugger()} className={` lp ${hide === false ? 'puff' : ''}`}>Let's <span className="play" onClick={() => spawnGrid()}>play</span></h3>
                <div className={`cards_grid ${hide === true ? 'puff' : ''}`}>
                    {
                        cards
                            .map((img, index) => {
                                return (
                                    <FrontCard
                                        key={index}
                                        image={img.img}
                                        clicked={(e) => clicked(e, img)}
                                        sameCheck={() => sameCheck(img)}
                                        disabled={sameCards.includes(img.id)}
                                        cardStatus={cardStatus}
                                    />)


                            })
                    }
                </div>

                <h4 onClick={() => refreshCards()} className={`reset ${hide === true ? 'puff' : ''}`}>Reset</h4>
            </div>

        )
    }


}
