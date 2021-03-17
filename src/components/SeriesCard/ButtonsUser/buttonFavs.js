import React from 'react'

export default function ButtonFavs( {userFavs, handleFavsB, handleEraseFavsB} ){
    const classButton = userFavs ? 'svgheart favsvg' : 'svgheart'
    const handleClick = userFavs ? handleEraseFavsB : handleFavsB
    return (
        <svg onClick={handleClick}
        version="1.1" xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" 
        viewBox="0 0 500 500" xmlSpace="preserve"
        style={{display:'flex'}} 
        className={classButton}>
                <path d="M130.6,25.4c11.9,0,25.7-2.2,37.1,1.6c12,4,23.9,6.7,35,13C223.5,51.7,237.5,71,251,90.2 c10-18.6,24-35.5,41.9-46.9c9.5-6,19.8-10.3,30.5-13.6c11.8-3.6,22.1-4.3,34.4-4.3c44.8,0,88.1,28.8,109.4,67.5 c11.2,20.3,18.4,43.8,21,66.8c2.7,23.2-2.2,49.3-8.4,71.7c-12.4,44.7-37.7,86-66.7,121.9c-30,37.2-66.2,69.2-105.9,95.7 c-10.5,7-21.2,13.8-32,20.4c-9.7,5.9-20,12-31.7,8.5c-9.9-2.9-19.3-9.6-28.1-14.8c-9.1-5.4-18-11.1-26.7-17.1 C118.7,398.2,55.7,331,27.5,249.7c-7.6-21.8-13.7-44.4-14.5-67.4c-0.8-23.6,2.8-47.3,11.4-69.5c14.3-37.3,44.7-67.9,82.9-80.5 c5.4-1.8,11-3.3,16.5-4.9c1.9-0.5,8-3.6,9.9-1.8c-0.1-0.1-5.8,2.5-6.4,1.2C127,26.4,130.7,25.3,130.6,25.4 C137.5,25.4,119.1,29,130.6,25.4z">
                </path>
        </svg>
    )
}