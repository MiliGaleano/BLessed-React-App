import React from 'react'

export default function ButtonWatchlist( {userWatchlist, handleWatchlistB, handleEraseWatchlistB} ){

    const classButton = userWatchlist ? 'eyewatch' : ''
    const classButton2 = userWatchlist ? 'eyewatch eye' : ''
    const handleClick = userWatchlist ? handleEraseWatchlistB : handleWatchlistB
    return (
        <svg onClick={handleClick}
        version="1.1" xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" 
        style={{display: 'flex'}} xmlSpace="preserve"
        className="svgeyewatch"
        >
                <g>
                    <g>
                        <path d="M9.1,247.7c0,0,227.9-420.1,484.1,0" className={classButton}>
                        </path>
                        <path d="M9.1,237.7c0,0,227.9,420.1,484.1,0" className={classButton}>
                        </path>
                        <circle cx="253.9" cy="245" r="76.8" className={classButton2}>
                        </circle>
                    </g>
                    <g>
                        <line x1="253.7" y1="197" x2="253.3" y2="250.7">
                        </line>
                        <line x1="253.7" y1="246.5" x2="291.4" y2="284.7">
                        </line>
                    </g>
                </g>
        </svg>
    )
}