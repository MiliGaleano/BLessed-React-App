import React from 'react'
import './styles.css'

export default function RateCard({id, nameSerie, handleCloseWatched, handleRate }){

return (
    <div className='modalRate'>
        <h2 className='h2modalRate'>{`How did you like ${nameSerie}?`}</h2>
        <div className='DivRateButtons'>
            <div>
                <input onChange={handleRate} type="radio" id="r-1" name="rateSerie" value='1'/>
                <label htmlFor="r-1">1</label>
            </div>
            <div>
                <input onChange={handleRate} type="radio" id="r-2" name="rateSerie" value='2'/>
                <label htmlFor="r-2">2</label>
            </div>
            <div>
                <input onChange={handleRate} type="radio" id="r-3" name="rateSerie" value='3'/>
                <label htmlFor="r-3">3</label>
            </div>
            <div>
                <input onChange={handleRate} type="radio" id="r-4" name="rateSerie" value='4'/>
                <label htmlFor="r-4">4</label>
            </div>
            <div>
                <input onChange={handleRate} type="radio" id="r-5" name="rateSerie" value='5'/>
                <label htmlFor="r-5">5</label>
            </div>
            <div>
                <input onChange={handleRate} type="radio" id="r-6" name="rateSerie" value='6'/>
                <label htmlFor="r-6">6</label>
            </div>
            <div>
                <input onChange={handleRate} type="radio" id="r-7" name="rateSerie" value='7'/>
                <label htmlFor="r-7">7</label>
            </div>
            <div>
                <input onChange={handleRate} type="radio" id="r-8" name="rateSerie" value='8'/>
                <label htmlFor="r-8">8</label>
            </div>
            <div>
                <input onChange={handleRate} type="radio" id="r-9" name="rateSerie" value='9'/>
                <label htmlFor="r-9">9</label>
            </div>
            <div>
                <input onChange={handleRate} type="radio" id="r-10" name="rateSerie" value='10'/>
                <label htmlFor="r-10">10</label>
            </div>
        </div>
        <button className='buttonModalRate' onClick={handleCloseWatched} >done</button>
    </div>
    )
}