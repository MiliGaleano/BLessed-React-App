import React, { useContext, useState, useCallback, useEffect } from 'react'
import Header from '../../../components/Header/index.js'
import Categories from '../../../components/Categories/Categories'
import {useLocation} from 'react-router-dom'
import CardSeriesContext from '../../../context/CardSeriesContext'
import ModalCardSeries from '../../../components/SeriesCard/ModalCardSeries'
import './styles.css'
import Footer from '../../../components/Footer'

export default function Category() {
    const [listOfSearched, setListOfSearched] = useState([])

    const [isDesktop, setDesktop] = useState(window.innerWidth < 790);

    const updateMedia = () => {
      setDesktop(window.innerWidth < 790);
  };
  
  useEffect(() => {
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia);
  });


const location = useLocation()
const path=location.pathname
const arrpath= path.split('/')
let category = arrpath[arrpath.length-1]

if (category === 'short') {
    category= 'short film'
} else if (category === 'miniseries') {
    category= 'mini'
}

let listToPrint = ''
const seriesDB = JSON.parse(sessionStorage.getItem('seriesDB'))
if (category === 'tocry') {
    listToPrint = seriesDB.filter((x)=>x.tocry === 'yes')
} else {
    listToPrint = seriesDB.filter((x)=>x.category === category)
}
const {showCard, setShowCard} = useContext(CardSeriesContext)

const handleSearching = useCallback( (x) => {
    setListOfSearched(x)
}, [])


    return (
        <div className="App">
                <Header handleSearching={handleSearching} category={category}/>
                 {listOfSearched.length !== 0 && <div className='divSearchedResult'>
                        {listOfSearched.map(({nameSerie, id})=> 
                            (id !== null) ? <p onClick={() => setShowCard(id)} className='listOfSuggestions' key={`li${id}s`}>{nameSerie}</p>
                            : <p className='listOfSuggestions' key={`li${id}s`}>{nameSerie}</p>
                            )}
                    </div>
                }
                { showCard !== 'false' && <ModalCardSeries id={showCard} />  }
                <Categories></Categories>
                <div className='divCategories'>
                    {listToPrint.map(({id, nameSerie}) =>
                        <div onClick={() => setShowCard(id)} key={`category${id}`} className='divImgCategory'>
                            <img src={'https://firebasestorage.googleapis.com/v0/b/blessed-e4d26.appspot.com/o/'+id+'.jpg?alt=media&token=24dd3d4a-81c9-4d7e-b5ca-4eff42c4c14e'} alt={`category ${id}`} />
                            <p className='textSlider' style={(isDesktop) ? {width: '40vw', textAlign:'center'} : {width: '200px', textAlign:'center'}}>{nameSerie}</p>
                        </div>
                    )}
                </div>
                <Footer></Footer>
            </div>
    )
}
