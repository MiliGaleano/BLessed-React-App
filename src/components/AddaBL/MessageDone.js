import React, { useState, useEffect} from 'react'
import './styles.css'

export default function MessageDone() {
    const [showMessage, setShowMessage] = useState(false)
    
    useEffect(() => {
        setShowMessage(true)
        setTimeout(()=> {
            setShowMessage(false)
        }, 3000)
    }, [])

    if (showMessage) return <div className='thanksAdd'>
                                <h1 className="titlepage">Thank you!</h1>
                                <h2 className="modalstyleh2">We will try to add this bl as soon as possible.</h2>
                            </div>
}
