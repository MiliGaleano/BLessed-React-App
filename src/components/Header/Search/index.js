import React, { useState, useEffect} from 'react'
import lupa from '../../../assets/images/lupa.png'
import './styles.css'

export default function Search( {handleSearching, category, userList} ) {
    const [searched, setSearched] = useState('')
    const [hideButton, setHideButton] = useState(false)

    const handleChange = evt => {
        setSearched(evt.target.value)
    }

    const handleClick = () => {
        setHideButton(!hideButton)
        handleSearching([])
    }

    useEffect(() => {
        const seriesDB = JSON.parse(sessionStorage.getItem('seriesDB'))
        let categoryList

        if (category === undefined) {
            categoryList = JSON.parse(sessionStorage.getItem(userList))
        } else
         if (category === 'tocry'){
            categoryList = seriesDB.filter((x)=> x.tocry === 'yes' )
        } else if (category === 'all') {
            categoryList = seriesDB.slice(0)
        } else {
            categoryList = seriesDB.filter((x)=> x.category === category )
        }

        const listSearchs = categoryList.filter((x)=> x.nameSerie.toUpperCase().search(searched.toUpperCase()) !== -1 )
        const noMatch = {nameSerie:"Sorry, there's no bl with that name in this category", id:null}
        if (listSearchs.length === 0) { listSearchs.push(noMatch)}

        handleSearching(listSearchs)
        if (searched.length < 1){
                handleSearching([])
            }
      }, [searched, handleSearching, category, userList]);
      
    return (
        <div className='divSearch'>
        {!hideButton && <div className='closedSearch'><img onClick={handleClick} id='lupaBoton' src={lupa} alt='lupa' className='Glass'></img></div>}
        {hideButton && <div className='openSearch'>
                            <form className='FormSearch' id='formLupa'>
                                <input type='text' onChange={handleChange} value={searched} className='inputSearch'/>
                                <button type='button' className='buttonSearchform'>
                                    <img src={lupa} alt='search' className='GlassButton' onClick={handleClick}></img>
                                </button>
                            </form>
                        </div>
                }
        </div>
    )
}