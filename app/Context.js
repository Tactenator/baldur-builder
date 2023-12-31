'use client'

import { createContext, useContext, useState } from 'react'

const GlobalContext = createContext({
    race: '', 
    setRace: (() => ''), 
    class: [], 
    setClass: (() => ''), 
    subRace: '', 
    setSubRace:(() => ''), 
    background: '', 
    setBackground:(() => ''),
    level: '',
    setLevel:(() => '')
})

export const GlobalContextProvider = ({ children }) => {
    const [ race, setRace ] = useState('')
    const [ playerClass, setPlayerClass ] = useState([])
    const [ subRace, setSubRace ] = useState('')
    const [ background, setBackground ] = useState('')
    const [ level, setLevel ] = useState('1')

    return (
        <GlobalContext.Provider value={{ race, setRace, playerClass, setPlayerClass, subRace, setSubRace, background, setBackground, level, setLevel }}>
            { children }
        </GlobalContext.Provider>
    );
}

export const useGlobalContext = () => useContext(GlobalContext)
