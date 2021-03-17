import React from 'react'

export default function ButtonWatched( {handleWatchedB, userWatched, handleEraseWatchedB} ){

    const classButton = userWatched ? 'svgwatchedicon svgchecked' : 'svgwatchedicon'
    const handleClick = userWatched ? handleEraseWatchedB : handleWatchedB
    return (
        <svg onClick={handleClick} 
        version="1.1" xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" 
        viewBox="0 0 500 500" xmlSpace="preserve" 
        style={{enableBackground:'new 0 0 500 500'}} 
        className={classButton}
        >
            <path d="M381.5,488.2H120c-58.6,0-106.5-47.9-106.5-106.5V120.2C13.5,61.6,61.5,13.7,120,13.7h261.5 c58.6,0,106.5,47.9,106.5,106.5v261.5C488,440.3,440.1,488.2,381.5,488.2z">
            </path>
            <polyline points="165.5,256.7 216.2,335.3 365.4,144.8">
            </polyline>
        </svg>
    )
}