import React from 'react'
import StarIcon from './StarIcon'
import './styles.css'

export default function DivStars({sliderDiv, starsAverage, classCard}) {
let printStars=[]
function paintStars(x) {
    for (let i = 0; i < Math.floor(x); i++) {
       printStars.push(<StarIcon starClass={'star filled'} key={`${i}star${x}`}></StarIcon>)
    }
    if (Number.isInteger(x) === false) {
        let fixedx = x.toFixed(2);
        if (fixedx-Math.floor(x) >= 0.25 && fixedx-Math.floor(x) <= 0.85) {
            printStars.push(<StarIcon starClass={'star half'} key={`halfstar${x}`}></StarIcon>)
        }
        else if (fixedx-Math.floor(x) > 0.85) {
        printStars.push(<StarIcon starClass={'star filled'} key={`fillstar${x}`}></StarIcon>)
             }
    }
    if (printStars.length < 5) {
        for (let i = printStars.length; i < 5; i++) {
            printStars.push(<StarIcon starClass={'star'} key={`${i}nofillstar${x}`}></StarIcon>)
        }
    }
    return printStars
}

return (
        <div className={sliderDiv === undefined ? 'DivStars '+classCard : 'DivStars '+sliderDiv}>
            {paintStars(starsAverage)}
        </div>
    )
}