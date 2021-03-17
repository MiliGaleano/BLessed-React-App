import React from 'react'
import { useHistory } from "react-router-dom";
import Header from '../../components/Header/index.js'
import SeriesCard from '../../components/SeriesCard'
import './styles.css'

export default function Description(){
    const history = useHistory();
    const path=history.location.pathname
    const arrpath= path.split('/')
    const id = arrpath[arrpath.length - 1]
    return(
        <div className='divDescription'>
        <Header />
            <div style={{paddingBottom:'22vw'}}>
                <button onClick={history.goBack} className='closeCard'>X</button>
                <SeriesCard id={id}></SeriesCard>
            </div>
        </div>
    )
}