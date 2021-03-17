import React, {useContext} from 'react'
import {Auth} from '../../context/authContext'
import DivWatchlist from './divWatchlist'
import Footer from '../../components/Footer'

export default function Watchlist() {

    const { user } = useContext(Auth);
    const usermail =user.email

   return (
            <div className="App">
                <DivWatchlist usermail={usermail}></DivWatchlist>
                <Footer></Footer>
            </div>
    )
}
