'use client'; 

import { createContext, useContext, useState } from "react";

export const Context = createContext(); 
export const ContextProvider = ({ children }) => {
    const [ race, setRace ] = useState('Elf');
    const [ subRace, setSubRace ] = useState('')
    const [ playerClass, setPlayerClass ] = useState([])
    const [ cantrips, setCantrips ] = useState([])
    const [ spells, setSpells ] = useState([])
    const [ feats, setFeats ] = useState([])
    const [ attributes, setAttributes ] = useState({})

    return (
        <Context.Provider value={[
            race, setRace, 
            subRace, setSubRace, 
            playerClass, setPlayerClass, 
            cantrips, setCantrips, 
            spells, setSpells, 
            feats, setFeats, 
            attributes, setAttributes 
            ]}>
            { children }
        </Context.Provider>
    );
}

export const useGlobalContext = () => useContext(Context)