import React, {useState, useContext, useEffect, useCallback} from 'react'
import Header from '../../components/Header/index.js'
import Categories from '../../components/Categories/Categories'
import Slider from '../../components/Slider/Slider'
import ButtonsHome from '../../components/Buttons/ButtonsHome'
import WhatToWatch from '../../components/WhatToWatch/index.js'
import ListSuggestions from '../../components/WhatToWatch/ListSuggestions'
import CardSeriesContext from '../../context/CardSeriesContext'
import ModalCardSeries from '../../components/SeriesCard/ModalCardSeries'
import AddaBL from '../../components/AddaBL'
import app from '../../config/config'
import {Auth} from '../../context/authContext'
import GetSeries from '../../services/getSeries'
import GetRecently from '../../services/getRecently'
import { useHistory } from "react-router-dom";
import Footer from '../../components/Footer'
import Loading from '../../components/Loading/index.js'
import GetUser from '../../services/getUser.js'


export default function Home() {

    const [loading, setLoading] = useState(true)
    let history = useHistory();

    const { user } = useContext(Auth);

    useEffect(() => {
        if (user===null) {
            history.push("/login");
        } else {
        const seriesDB = JSON.parse(sessionStorage.getItem('seriesDB'))
            if (seriesDB === null) {
                GetSeries()
                .then(() => {
                    GetUser(user.email).then(res => {
                    })
                })
                .then(() => {
                    GetRecently().then(res => {
                        setLoading(false)
                    })
                })
                .catch(function(error) {
                    console.error('ERR', error);
                })
            } else {
                setLoading(false)
            }
        }
    }, [history, user]);

    sessionStorage.setItem('searchFavList', JSON.stringify([]))
    sessionStorage.setItem('searchWatchedList', JSON.stringify([]))
    sessionStorage.setItem('searchWatchlist', JSON.stringify([]))

    const [ stateWhatToWatch, setStateWhatToWatch] = useState(false)
    
    const [ modalSuggestions, setModalSuggestions ] = useState([])

    const [ stateAddaBL, setStateAddaBL] = useState(false)

    const [listOfSearched, setListOfSearched] = useState([])

    const [isDesktop, setDesktop] = useState(window.innerWidth < 790)

    const updateMedia = () => {
      setDesktop(window.innerWidth < 790)
  }
  
  useEffect(() => {
      window.addEventListener("resize", updateMedia)
      return () => window.removeEventListener("resize", updateMedia)
  })

    const handleWhatoWatch = () => {
        setStateWhatToWatch(true)
    }

    const handleCloseWhatoWatch = () => {
        setStateWhatToWatch(false)
    }

    const handleStateList = (x) => {
        setModalSuggestions(x)
    }

    const handleAddaBL = () => {
        setStateAddaBL(true)
    }

    const handleCloseAddaBL = () => {
        setStateAddaBL(false)
    }

    const {showCard, setShowCard} = useContext(CardSeriesContext)

    const handleSearching = useCallback( (x) => {
        setListOfSearched(x)
    }, [])

    const watchedUser = JSON.parse(sessionStorage.getItem('seriesWatched'))
    const watchlistUser = JSON.parse(sessionStorage.getItem('seriesWatchlist'))

// 
    if (loading === false) {
    return (
            <div className="App">
                <Header handleSearching={handleSearching} category='all' />
                {listOfSearched.length !== 0 && <div className='divSearchedResult'>
                        {listOfSearched.map(({nameSerie, id})=> 
                            (id !== null) ? <p onClick={() => setShowCard(id)} className='listOfSuggestions' key={`li${id}s`}>{nameSerie}</p>
                            : <p className='listOfSuggestions' key={`li${id}s`}>{nameSerie}</p>
                            )}
                    </div>
                }
                { showCard !== 'false' && <ModalCardSeries id={showCard} />  }
                {stateWhatToWatch && <WhatToWatch handleWhat={handleCloseWhatoWatch} handleStateList={handleStateList}/>}
                {modalSuggestions.length !== 0 && <ListSuggestions suggestions={modalSuggestions} handleStateList={handleStateList}/>}
                {stateAddaBL && <AddaBL handleAdd={handleCloseAddaBL} />}
                <Categories></Categories>
                <ButtonsHome handleWhat={handleWhatoWatch} handleAdd={handleAddaBL}></ButtonsHome>
                <h1 style={{textAlign:'left', marginLeft:'3.5%'}}>Top Rated</h1>
                <Slider sliderType='stars'></Slider>
                <h1 style={{textAlign:'left', marginLeft:'3.5%', marginTop:'1em'}}>Fan favourites</h1>
                <Slider sliderType='favs'></Slider>
                <h1 style={{textAlign:'left', marginLeft:'3.5%', marginTop:'1em'}}>Recently added</h1>
                <Slider sliderType='year'></Slider>
                <button onClick={()=>app.auth().signOut()} className="buttonsubmit" style={(isDesktop) ? {marginTop: '30px', marginBottom: '30px'} : {marginTop: '50px', width: '20vw', fontSize: '1em', marginLeft:'40vw', padding: '1vw 0 1vw 0'}}>log out</button>
                <Footer></Footer>
            </div>
    )} else {
        return <Loading></Loading>
    }
}
