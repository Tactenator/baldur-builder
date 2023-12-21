'use client'

import Image from "next/image";

import { useContext } from 'react';
import { Context } from '@/app/Context';

import Barbarian from '../../public/images/classes/barbarian.png'
import Bard from '../../public/images/classes/Bard.png'
import Cleric from '../../public/images/classes/Cleric.png'
import Druid from '../../public/images/classes/Druid.png'
import Fighter from '../../public/images/classes/Fighter.png'
import Monk from '../../public/images/classes/Monk.png'
import Paladin from '../../public/images/classes/Paladin.png'
import Ranger from '../../public/images/classes/Ranger.png'
import Rogue from '../../public/images/classes/Rogue.png'
import Sorcerer from '../../public/images/classes/Sorcerer.png'
import Warlock from '../../public/images/classes/Warlock.png'
import Wizard from '../../public/images/classes/Wizard.png'

import { useGlobalContext } from "@/app/Context";


const Classes = () => {

    const { playerClass, setPlayerClass } = useGlobalContext()

    const addClass = function(newClass) {

        if(playerClass.includes(newClass)) {
            const index = playerClass.indexOf(newClass)
            setPlayerClass(classList => [...playerClass, playerClass.splice(index, 1)])
            return
        }
        setPlayerClass(classList => [...playerClass, newClass])
    }

    return ( 
        <div className="bg-hero p-10 w-2/5 border-8 border-gold">
        <div className="text-center text-3xl text-gold font-bold pb-10 ">Choose your Class</div>
        { playerClass }
        <div className="grid grid-cols-4 gap-10">
            <div className='flex flex-col items-center'>
                <Image onClick={((e) => addClass('Barbarian'))} value="Barbarian" 
                className='hover:opacity-50 hover:cursor-pointer' src={Barbarian} alt='Barbarian' width={100} height={100}></Image>
                <p className='text-gold'>Barbarian</p>
            </div>
            <div className='flex flex-col items-center'>
                <Image onClick={((e) => addClass('Bard'))} value="Bard" className='hover:opacity-50 hover:cursor-pointer' 
                src={Bard} alt='Bard' width={100} height={100}></Image>
                <p className='text-gold'>Bard</p>
            </div>
            <div className='flex flex-col items-center'>
                <Image onClick={((e) => addClass('Cleric'))} value="Cleric" className='hover:opacity-50 hover:cursor-pointer' 
                src={Cleric} alt='Cleric' width={100} height={100}></Image>
                <p className='text-gold'>Cleric</p>
            </div>
            <div className='flex flex-col items-center'>
                <Image onClick={((e) => addClass('Druid'))} value="Druid" className='hover:opacity-50 hover:cursor-pointer' 
                src={Druid} alt='Druid' width={100} height={100}></Image>
                <p className='text-gold'>Druid</p>
            </div>
            <div className='flex flex-col items-center'>
                <Image onClick={((e) => addClass('Fighter'))} value="Fighter" className='hover:opacity-50 hover:cursor-pointer' 
                src={Fighter} alt='Fighter' width={100} height={100}></Image>
                <p className='text-gold'>Fighter</p>
            </div>
            <div className='flex flex-col items-center'>
                <Image onClick={((e) => addClass('Monk'))} value="Monk" className='hover:opacity-50 hover:cursor-pointer'
                src={Monk} alt='Monk' width={100} height={100}></Image>
                <p className='text-gold'>Monk</p>
            </div>
            <div className='flex flex-col items-center'>
                <Image onClick={((e) => addClass('Paladin'))} value="Paladin" className='hover:opacity-50 hover:cursor-pointer' 
                src={Paladin} alt='Paladin' width={100} height={100}></Image>
                <p className='text-gold'>Paladin</p>
            </div>
            <div className='flex flex-col items-center'>
                <Image onClick={((e) => addClass('Ranger'))} value="Ranger" className='hover:opacity-50 hover:cursor-pointer' 
                src={Ranger} alt='Ranger' width={100} height={100}></Image>
                <p className='text-gold'>Ranger</p>
            </div>
            <div className='flex flex-col items-center'>
                <Image onClick={((e) => addClass('Rogue'))} value="Rogue" className='hover:opacity-50 hover:cursor-pointer' 
                src={Rogue} alt='Rogue' width={100} height={100}></Image>
                <p className='text-gold'>Rogue</p>
            </div>
            <div className='flex flex-col items-center'>
                <Image onClick={((e) => addClass('Sorcerer'))} value="Sorcerer" className='hover:opacity-50 hover:cursor-pointer' 
                src={Sorcerer} alt='Sorcerer' width={100} height={100}></Image>
                <p className='text-gold'>Sorcerer</p>
            </div>
            <div className='flex flex-col items-center'>
                <Image onClick={((e) => addClass('Warlock'))} value="Warlock" className='hover:opacity-50 hover:cursor-pointer' 
                src={Warlock} alt='Warlock' width={100} height={100}></Image>
                <p className='text-gold'>Warlock</p>
            </div>
            <div className='flex flex-col items-center'>
                <Image onClick={((e) => addClass('Wizard'))} value="Wizard" className='hover:opacity-50 hover:cursor-pointer' 
                src={Wizard} alt='Wizard' width={100} height={100}></Image>
                <p className='text-gold'>Wizard</p>
            </div>
            
        </div>
    </div>
     );
}
 
export default Classes;