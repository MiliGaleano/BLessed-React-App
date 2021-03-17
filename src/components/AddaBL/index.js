import React, { useState, useContext } from 'react'
import './styles.css'
import {Auth} from '../../context/authContext'
import firebase from 'firebase/app'
import 'firebase/firestore'

export default function AddaBL( {handleAdd} ) {

    const [showMessage, setShowMessage] = useState(false)

    const [ addABlForm, setAddABlForm ] = useState({
        category: '',
        name: '',
        year: '',
        country: '',
        link: '',
    })

    const { user } = useContext(Auth);
    const usermail =user.email
    const db = firebase.firestore()

    const handleCat = (event) => {
        setAddABlForm({
            ...addABlForm,
            category: event.target.value
        })
    }

    const handleName = (event) => {
        setAddABlForm({
            ...addABlForm,
            name: event.target.value
        })
    }
    const handleYear = (event) => {
        setAddABlForm({
            ...addABlForm,
            year: event.target.value
        })
    }
    const handleCountry = (event) => {
        setAddABlForm({
            ...addABlForm,
            country: event.target.value
        })
    }
    const handleLink = (event) => {
        setAddABlForm({
            ...addABlForm,
            link: event.target.value
        })
    }

    const handleForm = (event) => {
        event.preventDefault()

        let newbldata = {
            name: addABlForm.name,
            country: addABlForm.country,
            year: addABlForm.year,
            category: addABlForm.category,
            link: addABlForm.link,
            }
            db.collection("addNewBls").doc(usermail+addABlForm.name).set(newbldata)
            .then(function(docRef) {
            console.log("OK!")
            })
            .catch(function(error) {
            console.log("Error: " + error)
            })

        setShowMessage(true)
        setTimeout(()=> {
            setShowMessage(false)
            handleAdd()
        }, 3000)
    }

    if (showMessage) return <div className='thanksAdd'>
                                <h1 className="titlepage">Thank you!</h1>
                                <h2 className="modalstyleh2">We will try to add this bl as soon as possible.</h2>
                            </div>
    return (
        <div className='modalSuggest divAdd'>
            <form onSubmit={handleForm}>
                <button onClick={handleAdd} className='closeModalCard addbl'>X</button>
                <h1 className='titleSuggestModal'>Wanna add a BL?</h1>
                    <div className="chooseone flex">
                        <div className="ck-button">
                            <input onChange={handleCat} type="radio" value="movie" name="long" className="radioinp" id='movieRec' />
                            <label htmlFor="movieRec">movie</label>
                        </div>
                        <div className="ck-button">
                            <input onChange={handleCat} type="radio" value="mini" name="long" className="radioinp" id='miniRec' />
                            <label htmlFor="miniRec">mini series</label>
                        </div>
                        <div className="ck-button">
                            <input onChange={handleCat} type="radio" value="series" name="long" className="radioinp" id='seriesRec' />
                            <label htmlFor="seriesRec">series</label>
                        </div>
                    </div>
                <div className="addbldata">
                    <label htmlFor="blname">BL name:</label>
                    <input onChange={handleName} type="text" id="blname" name="blname" className="datainputadd"/>
                    <label htmlFor="blyear">year:</label>
                    <input onChange={handleYear} type="number" id="blyear" name="blyear" className="datainputadd"/>
                    <label htmlFor="blcountry">country:</label>
                    <input onChange={handleCountry} type="text" id="blcountry" name="blcountry" className="datainputadd"/>
                    <label htmlFor="bllink">where to watch:</label>
                    <input onChange={handleLink} type="text" id="bllink" name="bllink" className="datainputadd"/>
                </div>
                {(addABlForm.category !== '' && addABlForm.name !== '' && addABlForm.year !== '' && addABlForm.country !== '' && addABlForm.link !== '') && <button type='submit' className="buttonsubmit submitAdd" >done</button>}
            </form>
        </div>
    )
}