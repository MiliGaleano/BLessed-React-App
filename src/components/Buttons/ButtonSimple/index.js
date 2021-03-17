import React from 'react'
import './styles.css'

export default function Buttons({text, handleWhat}){
    return (
        <button onClick={handleWhat}>{text}</button>
    )
}