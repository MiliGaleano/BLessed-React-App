import React, { useContext } from 'react'
import './styles.css'
import CardSeriesContext from '../../context/CardSeriesContext'

export default function ListSuggestions( {suggestions, handleStateList} ) {
    const list = suggestions
    const {setShowCard} = useContext(CardSeriesContext)
    return (
        <div className='modalSuggest'>
             <div className='modalListofSuggestions'>
             <button onClick={()=>handleStateList([])} className='listClose'>X</button>
                {list.map(({nameSerie, id})=> 
                    <p onClick={() => setShowCard(id)} className='listOfSuggestions' key={`li${id}s`}>{nameSerie}</p>
                )}
            </div>
        </div>
    )
}
