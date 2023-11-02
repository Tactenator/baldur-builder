'use client'

import Image from 'next/image';
import Human from '../public/images/race/humans/Race_Human.png'
import Drow from '../public/images/race/drow/Race_Drow.png'
import DragonBorn from '../public/images/race/dragonborn/Race_Dragonborn.png'
import Dwarf from '../public/images/race/dwarf/Race_Dwarf.png'
import Elf from '../public/images/race/elf/Race_Elf.png'
import Githyanki from '../public/images/race/githyanki/Race_Githyanki.png'
import Gnome from '../public/images/race/gnome/Race_Gnome.png'
import HalfElf from '../public/images/race/half-elf/Race_Half-Elf.png'
import HalfOrc from '../public/images/race/half-orc/Race_Half-Orc.png'
import Halfling from '../public/images/race/halfling/Race_Halfling.png'
import Tiefling from '../public/images/race/tiefling/Race_Tiefling.png'

import { useGlobalContext } from '@/app/Context';


const Races = () => {

    const [ race, setRace ] = useGlobalContext();


    return ( 
        <div className="bg-hero p-10 w-2/5 border-8 border-gold">
            <div className="text-center text-3xl text-gold font-bold pb-10 ">Choose your Race</div>
            <div className="grid grid-cols-4 gap-10">
                <Image onClick={((e) => setRace(e.target.value))} value="Elf" 
                className='hover:opacity-50 hover:cursor-pointer' src={Elf} alt='Elf' width={100} height={100}></Image>
                <Image onClick={((e) => setRace(e.target.value))} value="Tiefling" className='hover:opacity-50 hover:cursor-pointer' 
                src={Tiefling} alt='Tiefling' width={100} height={100}></Image>
                <Image onClick={((e) => setRace(e.target.value))} value="Drow" className='hover:opacity-50 hover:cursor-pointer' 
                src={Drow} alt='Drow' width={100} height={100}></Image>
                <Image onClick={((e) => setRace(e.target.value))} value="Human" className='hover:opacity-50 hover:cursor-pointer' 
                src={Human} alt='Human' width={100} height={100}></Image>
                <Image onClick={((e) => setRace(e.target.value))} value="Githyanki" className='hover:opacity-50 hover:cursor-pointer' 
                src={Githyanki} alt='Githyanki' width={100} height={100}></Image>
                <Image onClick={((e) => setRace(e.target.value))} value="Dwarf" className='hover:opacity-50 hover:cursor-pointer'
                src={Dwarf} alt='Dwarf' width={100} height={100}></Image>
                <Image onClick={((e) => setRace(e.target.value))} value="Half-Elf" className='hover:opacity-50 hover:cursor-pointer' 
                src={HalfElf} alt='Half-Elf' width={100} height={100}></Image>
                <Image onClick={((e) => setRace(e.target.value))} value="Halfling" className='hover:opacity-50 hover:cursor-pointer' 
                src={Halfling} alt='Halfling' width={100} height={100}></Image>
                <Image onClick={((e) => setRace(e.target.value))} value="Gnome" className='hover:opacity-50 hover:cursor-pointer' 
                src={Gnome} alt='Gnome' width={100} height={100}></Image>
                <Image onClick={((e) => setRace(e.target.value))} value="Dragonborn" className='hover:opacity-50 hover:cursor-pointer' 
                src={DragonBorn} alt='Dragonborn' width={100} height={100}></Image>
                <Image onClick={((e) => setRace(e.target.value))} value="Half-Orc" className='hover:opacity-50 hover:cursor-pointer' 
                src={HalfOrc} alt='Human' width={100} height={100}></Image>
            </div>
        </div>
     );
}
 
export default Races;