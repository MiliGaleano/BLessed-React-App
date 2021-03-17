import React, {useContext} from 'react'
import {Auth} from '../../context/authContext'
import DivWatchedList from './divWatchedList'
import Footer from '../../components/Footer'

export default function Watched() {

    const { user } = useContext(Auth);
    const usermail =user.email

    return (
            <div className="App">
                <DivWatchedList usermail={usermail}></DivWatchedList>
                <Footer></Footer>
            </div>
    )
}
