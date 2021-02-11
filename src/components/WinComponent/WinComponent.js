import React, { useRef, useEffect } from 'react'
import gsap from "gsap"
import confetti from 'canvas-confetti'

export default function WinComponent() {

    const box = useRef()

    useEffect(() => {

        var count = 200;
        var defaults = {
            origin: { y: 0.7 }
        };

        function fire(particleRatio, opts) {
            confetti(Object.assign({}, defaults, opts, {
                particleCount: Math.floor(count * particleRatio),
                colors: ['#0e00ff'],
            }));
        }

        fire(0.25, {
            spread: 26,
            startVelocity: 55,
        });
        fire(0.2, {
            spread: 60,
        });
        fire(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8
        });
        fire(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2
        });
        fire(0.1, {
            spread: 120,
            startVelocity: 45,
        });


    }, [])

    const reloadPage = () => {

        window.location.reload()
    }

    return (
        <div>
            <h1>You <span onClick={() => confetti({ colors: ['#0e00ff'] })}>win</span>!</h1>
            <h3>Play <span onClick={() => reloadPage()}>again</span> or visit our <span><a target="_blank" href="https://www.display.design/">website</a></span></h3>
        </div>

    )
}
