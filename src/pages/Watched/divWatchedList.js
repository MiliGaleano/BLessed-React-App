import React, {useEffect, useState, useContext, useCallback} from 'react'
import GetWatchedList from './getWatchedList'
import CardSeriesContext from '../../context/CardSeriesContext'
import Header from '../../components/Header/index.js'
import ModalCardSeries from '../../components/SeriesCard/ModalCardSeries'
import Loading from '../../components/Loading'

export default function DivWatchedList({usermail}) {
    const [loading, setLoading] = useState(false)
    const [listWatchedList, setListWatchedList] = useState([])
    const [listOfSearched, setListOfSearched] = useState([])
    const {showCard, setShowCard} = useContext(CardSeriesContext)
    const [useEff, setUseEff] = useState(true)

    const [isDesktop, setDesktop] = useState(window.innerWidth < 790)

    const updateMedia = () => {
      setDesktop(window.innerWidth < 790)
  }
  
  useEffect(() => {
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia)
  })


    useEffect(() => {
        setLoading(true)
        GetWatchedList(usermail).then(res => {
            setListWatchedList(res)
            setLoading(false)
        }).catch(function(error) {
            console.error('ERR', error);
            })
    }, [useEff])

    const handleSearching = useCallback( (x) => {
        setListOfSearched(x)
    }, [])

    const handleUseEff = () => {
        setUseEff(!useEff)
    }

    if (loading) return <Loading></Loading>

    return (
        <div>
            <Header handleSearching={handleSearching} userList='searchWatchedList'/>

            {listOfSearched.length !== 0 && <div className='divSearchedResult'>
                    {listOfSearched.map(({nameSerie, id})=> 
                        (id !== null) ? <p onClick={() => setShowCard(id)} className='listOfSuggestions' key={`li${id}s`}>{nameSerie}</p>
                        : <p className='listOfSuggestions' key={`li${id}s`}>{nameSerie}</p>
                        )}
                </div>
            }
            { showCard !== 'false' && <ModalCardSeries id={showCard} handleUseEff={handleUseEff} />  }

            <h1 className='titleLists'>Watched list</h1>
            <div className='divCategories'>
                {listWatchedList.map(({id, nameSerie}) =>
                        <div onClick={() => setShowCard(id)} key={`category${id}`} className='divImgCategory'>
                            <img src={'https://firebasestorage.googleapis.com/v0/b/blessed-e4d26.appspot.com/o/'+id+'.jpg?alt=media&token=24dd3d4a-81c9-4d7e-b5ca-4eff42c4c14e'} alt={`category ${id}`} />
                            <p className='textSlider' style={(isDesktop) ? {width: '40vw', textAlign:'center'} : {width: '200px', textAlign:'center'}}>{nameSerie}</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}