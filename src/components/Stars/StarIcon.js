import React from 'react'
import './styles.css'

export default function StarIcon({starClass}){
    return( 
        <svg version="1.1" id="Capa_1" className='svgStar' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	    viewBox="0 0 310 310" style={{enableBackground: 'new 0 0 310 310'}} xmlSpace="preserve">
                <defs>
                <linearGradient id="left-half">
                    <stop stopOpacity="1" offset="0" stopColor="rgb(228, 119, 125)">
                    </stop>
                    <stop stopOpacity="1" offset="0.5" stopColor="rgb(228, 119, 125)">
                    </stop>
                    <stop stopOpacity="1" offset="0.5" stopColor="transparent">
                    </stop>
                    <stop stopOpacity="1" offset="1" stopColor="transparent">
                    </stop>
                </linearGradient><linearGradient id="left-right-stroke">
                    <stop stopOpacity="1" offset="0" stopColor="rgb(228, 119, 125)">
                    </stop>
                    <stop stopOpacity="1" offset="0.5" stopColor="rgb(228, 119, 125)">
                    </stop>
                    <stop stopOpacity="1" offset="0.5" stopColor="rgb(41, 70, 135)">
                    </stop>
                    <stop stopOpacity="1" offset="1" stopColor="rgb(41, 70, 135)">
                    </stop>
                </linearGradient>
            </defs>
            <polygon className={starClass} points="155,26.4 196.8,111.1 290.2,124.6 222.6,190.6 238.6,283.6 155,239.7 71.4,283.6 87.4,190.6 19.8,124.6 113.2,111.1 "/>
        </svg>  
    )
}