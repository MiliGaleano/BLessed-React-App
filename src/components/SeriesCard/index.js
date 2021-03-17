import React, {useState, useContext, useEffect} from 'react'
import DivStars from '../Stars/divStars'
import RateCard from './RateCard.js'
import {Auth} from '../../context/authContext'
import firebase from 'firebase/app'
import 'firebase/firestore'
import ButtonsUser from './ButtonsUser/index'
import './styles.css'
import DeleteModal from './DeleteModal'

export default function SeriesCard({id, handleUseEff}){
    const [showModalWatched, setshowModalWatched] = useState(false)
    const [showModalEraseWatched, setshowModalEraseWatched] = useState(false)
    const [userThisSeries, setUserThisSeries] = useState({
        watched: false,
        favs: false,
        watchlist: false
    })
    const [seriesRate, setSeriesRate] = useState(0)
    const [useEff, setUseEff] = useState(true)
    const [starsRate, setStarsRate] = useState([])

    const { user } = useContext(Auth);
    const usermail =user.email
    const db = firebase.firestore()

    useEffect(() => {
        setUserThisSeries({
            watched: false,
            favs: false,
            watchlist: false
            }) 
        setStarsRate([])
        db.collection('users').doc(usermail).collection('watched').where('__name__',"==",id).get().then((query) => {  
            const thing = query.docs[0]
            if (thing !== undefined) {

                // check if fav
                if (thing.data().fav === "yes") {
                    setUserThisSeries({
                        watched: true,
                        favs: true,
                        watchlist: false
                    })
                } else {
                    setUserThisSeries({
                        watched: true,
                        favs: false,
                        watchlist: false
                        })
                }
            } else {
                db.collection('users').doc(usermail).collection('watchlist').where('__name__',"==",id).get().then((query) => {  
                    const thing2 = query.docs[0]
                    if (thing2 !== undefined) {
                        setUserThisSeries({
                        ...userThisSeries,
                        watchlist: true,
                        })                                    
                    }
                })
                .catch(function(error) {
                    console.log("Error: " , error)
                })
            }
        })
        .catch(function(error) {
            console.log("Error: " , error)
        })

        let newstars = []
        db.collection('listOfBLs').where('__name__',"==",id).get().then((query) => {  
            const thing = query.docs[0]
            for (let i = 0; i < thing.data().stars.length; i++) {
                newstars.push(thing.data().stars[i])
            }
            setStarsRate(newstars)
        })
        .catch(function(error) {
        console.log("Error: " , error)
        })

}, [useEff]);


    const handleClickWatched = () => {
        setshowModalWatched(true)
    }

    const handleRate = (event) => {
        setSeriesRate(event.target.value)
    }

    const closeModalWatched = () => {
        setshowModalWatched(false)
// add to user watched list
        let dataUser = {
            stars: parseInt(seriesRate),
            fav: "no"
        }
        db.collection('users').doc(usermail).collection('watched').doc(id).set(dataUser)
        .then(function(docRef) {
        console.log("OK!") 
        })
        .catch(function(error) {
        console.log("Error: " + error)
        })
// add rate to series db
        let newstars = []
        db.collection('listOfBLs').where('__name__',"==",id).get().then((query) => {  
            const thing = query.docs[0]
            for (let i = 0; i < thing.data().stars.length; i++) {
                newstars.push(thing.data().stars[i])
            }                                               
            newstars.push(parseInt(seriesRate))
            thing.ref.update({stars:newstars})
        })
        .catch(function(error) {
        console.log("Error: " , error)
        })
//delete from user watchlist 
        db.collection('users').doc(usermail).collection('watchlist').doc(id).delete()
        .then(function() {
        console.log("deleted!")
        })
        .then(() => {
        setUseEff(!useEff)
        handleUseEff()
        })
        .catch(function(error) {
        console.error("Error: ", error)
        })
    }

    const handleClickEraseWatched = () => {
        setshowModalEraseWatched(true)
    }

    const deleteFromWatched = () => {
        setshowModalEraseWatched(false)
        let restfav = 0
        let userfav
        let userstar
        let newstars = []
// delete from user watched list
        db.collection('users').doc(usermail).collection('watched').where('__name__',"==",id).get().then((query) => {  
            const thing = query.docs[0]
            userfav = thing.data().fav
            userstar = thing.data().stars
        })
        .then(function(){
            db.collection("users").doc(usermail).collection('watched').doc(id).delete()
            .then(function() {
                console.log("Document successfully deleted!")
            })
            .catch(function(error) {
                console.error("Error removing document: ", error)
            })
        })
        .catch(function(error) {
            console.error("Error removing document: ", error)
        })  
// if fav delete
        db.collection('listOfBLs').where('__name__',"==",id).get().then((query) => {  
            const thing = query.docs[0]
            restfav = thing.data().favs
            if (userfav === "yes") {                                             
            let newfav = restfav - 1
            thing.ref.update({favs:newfav})
            }
        })
        .catch(function(error) {
        console.log("Error: " , error)
        })
// delete rate
        db.collection('listOfBLs').where('__name__',"==",id).get().then((query) => {  
            const thing = query.docs[0]
            for (let i = 0; i < thing.data().stars.length; i++) {
                newstars.push(thing.data().stars[i])
            }                        
            let deletestar = newstars.indexOf(userstar)
            if (deletestar > -1 )  {                   
            newstars.splice(deletestar,1)
            }
            thing.ref.update({stars:newstars})
        })
        .then(() => {
        setUseEff(!useEff)
        handleUseEff()
        })
        .catch(function(error) {
        console.log("Error: " , error)
        })
    }

    const closeModalEraseWatched = () => {
        setshowModalEraseWatched(false)
      }

      const handleClickWatchlist = () => {
// add to user watchlist
        let towatch = {}
        db.collection('users').doc(usermail).collection('watchlist').doc(id).set(towatch)
        .then(function(docRef) {
        console.log("OK!")
        })
        .then(() => {
        setUseEff(!useEff)
        handleUseEff()
        })
        .catch(function(error) {
        console.log("Error: " + error)
        })
      }

      const handleClickEraseWatchlist = () => {
// delete from user watchlist
        db.collection('users').doc(usermail).collection('watchlist').doc(id).delete()
        .then(function() {
        console.log("deleted!")
        })
        .then(() => {
        setUseEff(!useEff)
        handleUseEff()
        })
        .catch(function(error) {
        console.error("Error: ", error)
        })
    }

    const handleClickFavs = () => {
// add to user favs list
        let addfav = 0
        let newfav
        db.collection("users").doc(usermail).collection('watched').doc(id).update({
        fav: "yes" })
        .then(function() {
        console.log("actualizado ok")
        })
        .catch(function(error) {
        console.log("Error: " + error)
        })
// add fav to series db
        db.collection('listOfBLs').where('__name__',"==",id).get().then((query) => {  
            const thing = query.docs[0]
            addfav = thing.data().favs
            newfav = addfav + 1                                
            thing.ref.update({favs:newfav})
        })
        .then(() => {
            setUseEff(!useEff)
            handleUseEff()
            })
        .catch(function(error) {
        console.log("Error: " , error)
        }) 
    }

    const handleClickEraseFavs = () => {

         let restfav = 0;
// update fav in user watchedlist
        db.collection("users").doc(usermail).collection('watched').doc(id).update({
        fav: "no" })
        .then(function() {
        console.log("actualizado ok")
        })
        .catch(function(error) {
        console.log("Error: " + error)
        })

// update favs in list of bl
        db.collection('listOfBLs').where('__name__',"==",id).get().then((query) => {  
            const thing = query.docs[0]
            restfav = thing.data().favs                                           
            let newfav = restfav - 1
            thing.ref.update({favs:newfav})
        })
        .then(() => {
        setUseEff(!useEff)
        handleUseEff()
        })
        .catch(function(error) {
            console.log("Error: " , error)
        })
    }

    const seriesDB = JSON.parse(sessionStorage.getItem('seriesDB'))

    let thisSerieStars
    if (starsRate.length !== 0) {
        thisSerieStars = starsRate.reduce(function(a, b){ return a + b })/starsRate.length 
     } else {
        thisSerieStars = 0 
    }
    const serie = seriesDB.filter((x)=>x.id === id)
    const { nameSerie, country, description, link, favs, stars, year } = serie[0]
    return (
        <div className='divSeriesCard'>
            {showModalWatched && <RateCard nameSerie={nameSerie} handleCloseWatched={closeModalWatched} handleRate={handleRate} />}
            {showModalEraseWatched && <DeleteModal nameSerie={nameSerie} handleCloseWatched={closeModalEraseWatched} handleDeleteWatched={deleteFromWatched}/>}
            <section>
                <img className='imgCard' src={'https://firebasestorage.googleapis.com/v0/b/blessed-e4d26.appspot.com/o/'+id+'.jpg?alt=media&token=24dd3d4a-81c9-4d7e-b5ca-4eff42c4c14e'} alt={id}></img>
                <DivStars starsAverage={thisSerieStars/2} classCard={'starsCard'}></DivStars>
            </section>
            <section className='seriesData'>
                <h2>{nameSerie}</h2>
                <h3>{`${country} - ${year}`}</h3>
                <p className='descriptionSeries'>{description}</p>
                <div className='divButtonsCard'>
                   {link === '' ||
                    <a href={link} target="_blank" rel='noopener noreferrer'>
                        <button className='buttCard'>
                            watch
                        </button>
                    </a>
                   }
                <ButtonsUser userWatched={userThisSeries.watched} handleWatchedB={handleClickWatched} handleEraseWatchedB={handleClickEraseWatched} userWatchlist={userThisSeries.watchlist} handleWatchlistB={handleClickWatchlist} handleEraseWatchlistB={handleClickEraseWatchlist} userFavs={userThisSeries.favs} handleFavsB={handleClickFavs} handleEraseFavsB={handleClickEraseFavs}></ButtonsUser>
                </div>
            </section>
        </div>
    )
}
