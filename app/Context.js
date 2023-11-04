'use client'

import { createContext, useContext, useState } from 'react'

const GlobalContext = createContext({
    race: '', 
    setRace: (() => ''), 
    class: [], 
    setClass: (() => '')
})

export const GlobalContextProvider = ({ children }) => {
    const [ race, setRace ] = useState('')
    const [ playerClass, setPlayerClass ] = useState([])

    return (
        <GlobalContext.Provider value={{ race, setRace, playerClass, setPlayerClass}}>
            { children }
        </GlobalContext.Provider>
    );
}

export const useGlobalContext = () => useContext(GlobalContext)
