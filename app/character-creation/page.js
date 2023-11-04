'use client'

import Classes from "@/components/builder-files/classes";
import Races from "@/components/builder-files/races";
import { useState } from "react";

export default function CharacterCreation() {

    const [ activated, isActivated ] = useState('')

    return(
        <div className="h-[100vh] bg-[url('../public/images/character-creation.webp')] bg-cover bg-no-repeat bg-center p-10">
            <Races></Races>
            <Classes></Classes>
        </div>
    );
}