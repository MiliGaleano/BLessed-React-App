import React, {useContext} from 'react'
import {Auth} from '../../context/authContext'
import DivFavList from './divFavList'
import Footer from '../../components/Footer'

export default function Favs() {

    const { user } = useContext(Auth);
    const usermail =user.email

    return (
            <div className="App">
                <DivFavList usermail={usermail}></DivFavList>
                <Footer></Footer>
            </div>
    )
}