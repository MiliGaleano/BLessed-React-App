import React from 'react'

export default function DeleteModal({ nameSerie, handleCloseWatched, handleDeleteWatched }){

return (
    <div className='modalRate'>
        <h2 className='h2modalRate'>{`Are you sure you want to delete ${nameSerie} from your watched list?`}</h2>
        <div className='DivRateButtons' style={{justifyContent: 'space-around'}}>
            <button className='buttonModalRate yesnobut' style={{marginLeft:0}} onClick={handleDeleteWatched}>yes</button>
            <button className='buttonModalRate yesnobut' style={{marginLeft:0}} onClick={handleCloseWatched}>no</button>
        </div>
    </div>
    )
}