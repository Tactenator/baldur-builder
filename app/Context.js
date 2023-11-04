'use client'

import { createContext, useContext, useState } from 'react'

const GlobalContext = createContext({
    race: '', 
    setRace: (() => ''), 
    class: [], 
    setClass: (() => ''), 
    subRace: '', 
    setSubRace:(() => '')
})

export const GlobalContextProvider = ({ children }) => {
    const [ race, setRace ] = useState('')
    const [ playerClass, setPlayerClass ] = useState([])
    const [ subRace, setSubRace ] = useState('')

    return (
        <GlobalContext.Provider value={{ race, setRace, playerClass, setPlayerClass}}>
            { children }
        </GlobalContext.Provider>
    );
}

export const useGlobalContext = () => useContext(GlobalContext)
