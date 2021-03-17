import React, {useContext} from 'react'
import SeriesCard from '../SeriesCard'
import CardSeriesContext from '../../context/CardSeriesContext'
import './styles.css'

export default function ModalCardSeries({id, handleUseEff}){
    const {setShowCard} = useContext(CardSeriesContext)
    return(
        <div className='ModalSeriesCard'>
            <div style={{paddingBottom:'22vw'}}>
                <button onClick={()=>setShowCard('false')} className='closeModalCard'>X</button>
                <SeriesCard id={id} handleUseEff={handleUseEff}></SeriesCard>
            </div>
        </div>
    )
}