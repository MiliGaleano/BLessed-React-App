import React from 'react'
import ButtonWatched from './buttonWatched'
import ButtonWatchlist from './buttonWatchlist'
import ButtonFavs from './buttonFavs'

export default function ButtonsUser({userWatched,handleWatchedB,handleEraseWatchedB,userWatchlist,handleWatchlistB,handleEraseWatchlistB,userFavs,handleFavsB,handleEraseFavsB}) {

    if (userWatched) { 
        return (
                <>
                <ButtonWatched userWatched={userWatched} handleWatchedB={handleWatchedB} handleEraseWatchedB={handleEraseWatchedB}></ButtonWatched>
                <ButtonFavs userFavs={userFavs} handleFavsB={handleFavsB} handleEraseFavsB={handleEraseFavsB}></ButtonFavs>
                </>
                )
            } else return (
                <>
                    <ButtonWatched userWatched={userWatched} handleWatchedB={handleWatchedB} handleEraseWatchedB={handleEraseWatchedB}></ButtonWatched>
                    <ButtonWatchlist userWatchlist={userWatchlist} handleWatchlistB={handleWatchlistB} handleEraseWatchlistB={handleEraseWatchlistB}></ButtonWatchlist>
                </>
            )
}