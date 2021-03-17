import React, {useContext, useCallback, useState} from 'react'
import Header from '../../components/Header/index.js'
import Categories from '../../components/Categories/Categories'
import Footer from '../../components/Footer'
import CardSeriesContext from '../../context/CardSeriesContext'
import ModalCardSeries from '../../components/SeriesCard/ModalCardSeries'

export default function AllSeries() {

    const [listOfSearched, setListOfSearched] = useState([])
    const {showCard, setShowCard} = useContext(CardSeriesContext)

    const seriesDB = JSON.parse(sessionStorage.getItem('seriesDB'))

    const handleSearching = useCallback( (x) => {
        setListOfSearched(x)
    }, [])

    return (
        <div className="App">
            <Header handleSearching={handleSearching} category='all'/>
            {listOfSearched.length !== 0 && <div className='divSearchedResult'>
                        {listOfSearched.map(({nameSerie, id})=> 
                            (id !== null) ? <p onClick={() => setShowCard(id)} className='listOfSuggestions' key={`li${id}s`}>{nameSerie}</p>
                            : <p className='listOfSuggestions' key={`li${id}s`}>{nameSerie}</p>
                            )}
                    </div>
                }
                { showCard !== 'false' && <ModalCardSeries id={showCard} />  }
            <Categories></Categories>
            <h1>All</h1>
            <div className='divCategories'>
                    {seriesDB.map(({id, nameSerie}) =>
                        <div onClick={() => setShowCard(id)} key={`category${id}`} className='divImgCategory'>
                            <img src={'https://firebasestorage.googleapis.com/v0/b/blessed-e4d26.appspot.com/o/'+id+'.jpg?alt=media&token=24dd3d4a-81c9-4d7e-b5ca-4eff42c4c14e'} alt={`category ${id}`} />
                            <p className='textSlider' style={{width: '40vw', textAlign:'center'}}>{nameSerie}</p>
                        </div>
                    )}
                </div>
            <Footer></Footer>
        </div>
    )
}