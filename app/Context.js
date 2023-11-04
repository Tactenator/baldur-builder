'use client'

import { createContext, useContext, useState } from 'react'

const GlobalContext = createContext({
    race: '', 
    setRace: (() => ''), 
})

export const GlobalContextProvider = ({ children }) => {
    const [ race, setRace ] = useState('')

    return (
        <GlobalContext.Provider value={{ race, setRace}}>
            { children }
        </GlobalContext.Provider>
    );
}

export const useGlobalContext = () => useContext(GlobalContext)
