import Image from "next/image";

import { useContext } from 'react';
import { Context } from '@/app/Context';

const Classes = () => {

    const [ playerClass, setPlayerClass ] = useContext(Context)
    return ( 
        <div className="bg-hero p-10 w-2/5 border-8 border-gold">
        <div className="text-center text-3xl text-gold font-bold pb-10 ">Choose your Class</div>
        <div className=''>{ playerClass }</div>
        <div className="grid grid-cols-4 gap-10">
            <button onClick={((e) => setPlayerClass('Elf'))} value="Elf" ><Image value="Elf"
            className='hover:opacity-50 hover:cursor-pointer' src={Elf} alt='Elf' width={100} height={100}></Image></button>
            <Image onClick={((e) => setPlayerClass('Tiefling'))} value="Tiefling" className='hover:opacity-50 hover:cursor-pointer' 
            src={Tiefling} alt='Tiefling' width={100} height={100}></Image>
            <Image onClick={((e) => setPlayerClass('Drow'))} value="Drow" className='hover:opacity-50 hover:cursor-pointer' 
            src={Drow} alt='Drow' width={100} height={100}></Image>
            <Image onClick={((e) => setPlayerClass('Human'))} value="Human" className='hover:opacity-50 hover:cursor-pointer' 
            src={Human} alt='Human' width={100} height={100}></Image>
            <Image onClick={((e) => setPlayerClass('Githyanki'))} value="Githyanki" className='hover:opacity-50 hover:cursor-pointer' 
            src={Githyanki} alt='Githyanki' width={100} height={100}></Image>
            <Image onClick={((e) => setPlayerClass('Dwarf'))} value="Dwarf" className='hover:opacity-50 hover:cursor-pointer'
            src={Dwarf} alt='Dwarf' width={100} height={100}></Image>
            <Image onClick={((e) => setPlayerClass('Half-Elf'))} value="Half-Elf" className='hover:opacity-50 hover:cursor-pointer' 
            src={HalfElf} alt='Half-Elf' width={100} height={100}></Image>
            <Image onClick={((e) => setPlayerClass('Halfling'))} value="Halfling" className='hover:opacity-50 hover:cursor-pointer' 
            src={Halfling} alt='Halfling' width={100} height={100}></Image>
            <Image onClick={((e) => setPlayerClass('Gnome'))} value="Gnome" className='hover:opacity-50 hover:cursor-pointer' 
            src={Gnome} alt='Gnome' width={100} height={100}></Image>
            <Image onClick={((e) => setPlayerClass('Dragonborn'))} value="Dragonborn" className='hover:opacity-50 hover:cursor-pointer' 
            src={DragonBorn} alt='Dragonborn' width={100} height={100}></Image>
            <Image onClick={((e) => setPlayerClass('Half-Orc'))} value="Half-Orc" className='hover:opacity-50 hover:cursor-pointer' 
            src={HalfOrc} alt='Half-Orc' width={100} height={100}></Image>
        </div>
    </div>
     );
}
 
export default Classes;