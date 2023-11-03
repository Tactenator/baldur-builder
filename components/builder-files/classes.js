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


const Classes = () => {

    const [ playerClass, setPlayerClass ] = useContext(Context)
    return ( 
        <div className="bg-hero p-10 w-2/5 border-8 border-gold">
        <div className="text-center text-3xl text-gold font-bold pb-10 ">Choose your Class</div>
        <div className=''>{ playerClass }</div>
        <div className="grid grid-cols-4 gap-10">
            <button onClick={((e) => setPlayerClass('Elf'))} value="Barbarian" ><Image 
            className='hover:opacity-50 hover:cursor-pointer' src={Barbarian} alt='Barbarian' width={100} height={100}></Image></button>
            <Image onClick={((e) => setPlayerClass('Bard'))} value="Bard" className='hover:opacity-50 hover:cursor-pointer' 
            src={Bard} alt='Bard' width={100} height={100}></Image>
            <Image onClick={((e) => setPlayerClass('Cleric'))} value="Cleric" className='hover:opacity-50 hover:cursor-pointer' 
            src={Cleric} alt='Cleric' width={100} height={100}></Image>
            <Image onClick={((e) => setPlayerClass('Druid'))} value="Druid" className='hover:opacity-50 hover:cursor-pointer' 
            src={Druid} alt='Druid' width={100} height={100}></Image>
            <Image onClick={((e) => setPlayerClass('Fighter'))} value="Fighter" className='hover:opacity-50 hover:cursor-pointer' 
            src={Fighter} alt='Fighter' width={100} height={100}></Image>
            <Image onClick={((e) => setPlayerClass('Monk'))} value="Monk" className='hover:opacity-50 hover:cursor-pointer'
            src={Monk} alt='Monk' width={100} height={100}></Image>
            <Image onClick={((e) => setPlayerClass('Paladin'))} value="Paladin" className='hover:opacity-50 hover:cursor-pointer' 
            src={Paladin} alt='Paladin' width={100} height={100}></Image>
            <Image onClick={((e) => setPlayerClass('Ranger'))} value="Ranger" className='hover:opacity-50 hover:cursor-pointer' 
            src={Ranger} alt='Ranger' width={100} height={100}></Image>
            <Image onClick={((e) => setPlayerClass('Rogue'))} value="Rogue" className='hover:opacity-50 hover:cursor-pointer' 
            src={Rogue} alt='Rogue' width={100} height={100}></Image>
            <Image onClick={((e) => setPlayerClass('Sorcerer'))} value="Sorcerer" className='hover:opacity-50 hover:cursor-pointer' 
            src={Sorcerer} alt='Sorcerer' width={100} height={100}></Image>
            <Image onClick={((e) => setPlayerClass('Warlock'))} value="Warlock" className='hover:opacity-50 hover:cursor-pointer' 
            src={Warlock} alt='Warlock' width={100} height={100}></Image>
            <Image onClick={((e) => setPlayerClass('Wizard'))} value="Wizard" className='hover:opacity-50 hover:cursor-pointer' 
            src={Wizard} alt='Wizard' width={100} height={100}></Image>
        </div>
    </div>
     );
}
 
export default Classes;