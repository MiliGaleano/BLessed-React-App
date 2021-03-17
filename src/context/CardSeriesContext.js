import React, {useState} from 'react'

const Context = React.createContext({})

export function CardSeriesContext ({children}) {
    const [showCard, setShowCard] = useState('false')

    return <Context.Provider value={{showCard, setShowCard}}>
    {children}
    </Context.Provider>
}

export default Context