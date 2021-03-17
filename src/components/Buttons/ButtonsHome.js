import React from 'react'
import Buttons from './ButtonSimple'
import './styles.css'

export default function ButtonsHome( {handleWhat, handleAdd} ){

    return (
        <div className='buttonsHome'>
            <Buttons text='What to watch' handleWhat={handleWhat}></Buttons>
            <Buttons text='Add a missing BL' handleWhat={handleAdd}></Buttons>
        </div>
    )
}