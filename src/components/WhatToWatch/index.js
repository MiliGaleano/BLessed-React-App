import React, { useState } from 'react'
import './styles.css'

export default function WhatToWatch( {handleWhat, handleStateList} ) {

    const [ whatToWatchForm, setWhatToWatchForm ] = useState({
        long: '',
        age: '',
        story: '',
        cry: ''
    })

    const handleLong = (event) => {
        setWhatToWatchForm({
            ...whatToWatchForm,
            long: event.target.value
        })
    }
    const handleStory = (event) => {
        setWhatToWatchForm({
            ...whatToWatchForm,
            story: event.target.value
        })
    }
    const handleAge = (event) => {
        setWhatToWatchForm({
            ...whatToWatchForm,
            age: event.target.value
        })
    }
    const handleCry = (event) => {
        setWhatToWatchForm({
            ...whatToWatchForm,
            cry: event.target.value
        })
    }
    const seriesDB = JSON.parse(sessionStorage.getItem('seriesDB'))
    const sortSeries= seriesDB.slice(0);

    let suggestions = []
    const handleForm = (event) => {
        event.preventDefault()
        handleWhat()
        // filter series
        suggestions = sortSeries.filter((x)=> x.age === whatToWatchForm.age && x.full === whatToWatchForm.story && x.tocry === whatToWatchForm.cry && x.category === whatToWatchForm.long)
            if (suggestions.length === 0){
                suggestions = sortSeries.filter((x)=> x.age === whatToWatchForm.age && x.tocry === whatToWatchForm.cry && x.category === whatToWatchForm.long)
            }
            if (suggestions.length === 0){
                suggestions = sortSeries.filter((x)=> x.age === whatToWatchForm.age && x.category === whatToWatchForm.long)
            }
            if (suggestions.length > 5){
                const randomIn = []
                const newSuggestions = []
                for (let i = 0; i < suggestions.length; i++) {
                    let random = Math.floor(Math.random()*(suggestions.length))
                    if (randomIn.includes(random) === false) {
                    randomIn.push(random) }
                }
                for (let i = 0; i < 5; i++) {
                    newSuggestions.push(suggestions[randomIn[i]])
                }
                suggestions = newSuggestions
            }
            handleStateList(suggestions)
    }

    return(
        <div className='modalSuggest'>
            <form onSubmit={handleForm}>
                <h1 className='titleSuggestModal'>what are you in the mood for?</h1>
                    <div className="chooseone flex">
                        <div className="ck-button">
                            <input onChange={handleLong} type="radio" value="movie" name="long" className="radioinp" id='movieRec' />
                            <label htmlFor="movieRec">movie</label>
                        </div>
                        <div className="ck-button">
                            <input onChange={handleLong} type="radio" value="mini" name="long" className="radioinp" id='miniRec' />
                            <label htmlFor="miniRec">mini series</label>
                        </div>
                        <div className="ck-button">
                            <input onChange={handleLong} type="radio" value="series" name="long" className="radioinp" id='seriesRec' />
                            <label htmlFor="seriesRec">series</label>
                        </div>
                    </div>
                <h1 className='titleSuggestModal'>choose one</h1>
                    <div className="chooseone flex">
                        <div className="ck-button">
                            <input onChange={handleAge} type="radio" value="school" name="age" className="radioinp" id='schoolRec' />
                            <label htmlFor="schoolRec">school</label>
                        </div>
                        <div className="ck-button">
                            <input onChange={handleAge} type="radio" value="uni" name="age" className="radioinp" id='uniRec' />
                            <label htmlFor="uniRec">uni</label>
                        </div>
                        <div className="ck-button">
                            <input onChange={handleAge} type="radio" value="adults" name="age" className="radioinp" id='adultsRec' />
                            <label htmlFor="adultsRec">adults</label>
                        </div>
                    </div>
                <h1 className='titleSuggestModal'>what do you prefer?</h1>
                    <div className="chooseone flex twopt">
                        <div className="ck-button">
                            <input onChange={handleStory} type="radio" value="yes" name="story" className="radioinp" id='fullblRec' />
                            <label htmlFor="fullblRec">full bl</label>
                        </div>
                        <div className="ck-button">
                            <input onChange={handleStory} type="radio" value="no" name="story" className="radioinp" id='sideStoryRec' />
                            <label htmlFor="sideStoryRec">side story</label>
                        </div>
                    </div>
                <h1 className='titleSuggestModal'>wanna cry?</h1>
                    <div className="chooseone flex twopt">
                        <div className="ck-button">
                            <input onChange={handleCry} type="radio" value="no" name="cry" className="radioinp" id='crynoRec' />
                            <label htmlFor="crynoRec">please no</label>
                        </div>
                        <div className="ck-button">
                            <input onChange={handleCry} type="radio" value="yes" name="cry" className="radioinp" id='cryRec' />
                            <label htmlFor="cryRec">don't mind</label>
                        </div>
                    </div>
                {(whatToWatchForm.long !== '' && whatToWatchForm.age!== '' && whatToWatchForm.story !== '' && whatToWatchForm.cry !== '') && <button type='submit' className="buttonsubmit" >done</button>}
            </form>
        </div>
    )
}