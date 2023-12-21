'use client'
import { useGlobalContext } from '@/app/Context'

import Image from 'next/image';

import { Acolyte } from '../../public/images/background/acolyte.webp'
import { Charlatan } from '../../public/images/background/charlatan.webp'
import { Criminal } from '../../public/images/background/criminal.webp'
import { Entertainer } from '../../public/images/background/entertainer.webp'
import { FolkHero } from '../../public/images/background/folk_hero.webp'
import { Artisan } from '../../public/images/background/artisan.webp'
import { Noble } from '../../public/images/background/noble.webp'
import { Outlander } from '../../public/images/background/outlander.webp'
import { Sage } from '../../public/images/background/sage.webp'
import { Soldier } from '../../public/images/background/soldier.webp'
import { Urchin } from '../../public/images/background/urchin.webp' 

const Background = () => {

    const { background, setBackground } = useGlobalContext()

    return ( 
        <div className="bg-hero p-10 w-2/5 border-8 border-gold">
            <div className="text-center text-3xl text-gold font-bold pb-10 ">Choose your Background</div>
            { background }
            <div className="grid grid-cols-4 gap-10">
                <button onClick={((e) => setBackground('Acolyte'))} value="Acolyte" ><Image value="Acolyte"
                className='hover:opacity-50 hover:cursor-pointer' src={Acolyte} alt='Acolyte' width={100} height={100}>Acolyte</Image></button>
                <Image onClick={((e) => setBackground('Charlatan'))} value="Charlatan" className='hover:opacity-50 hover:cursor-pointer' 
                src={Charlatan} alt='Charlatan' width={100} height={100}>Charlatan</Image>
                <Image onClick={((e) => setBackground('Criminal'))} value="Criminal" className='hover:opacity-50 hover:cursor-pointer' 
                src={Criminal} alt='Criminal' width={100} height={100}>Criminal</Image>
                <Image onClick={((e) => setBackground('Entertainer'))} value="Entertainer" className='hover:opacity-50 hover:cursor-pointer' 
                src={Entertainer} alt='Entertainer' width={100} height={100}>Entertainer</Image>
                <Image onClick={((e) => setBackground('Folk Hero'))} value="Folk Hero" className='hover:opacity-50 hover:cursor-pointer' 
                src={FolkHero} alt='Folk Hero' width={100} height={100}>Folk Hero</Image>
                <Image onClick={((e) => setBackground('Artisan'))} value="Artisan" className='hover:opacity-50 hover:cursor-pointer'
                src={Artisan} alt='Artisan' width={100} height={100}>Artisan</Image>
                <Image onClick={((e) => setBackground('Half-Elf'))} value="Half-Elf" className='hover:opacity-50 hover:cursor-pointer' 
                src={HalfElf} alt='Half-Elf' width={100} height={100}></Image>
                <Image onClick={((e) => setBackground('Halfling'))} value="Halfling" className='hover:opacity-50 hover:cursor-pointer' 
                src={Halfling} alt='Halfling' width={100} height={100}></Image>
                <Image onClick={((e) => setBackground('Gnome'))} value="Gnome" className='hover:opacity-50 hover:cursor-pointer' 
                src={Gnome} alt='Gnome' width={100} height={100}></Image>
                <Image onClick={((e) => setBackground('Dragonborn'))} value="Dragonborn" className='hover:opacity-50 hover:cursor-pointer' 
                src={DragonBorn} alt='Dragonborn' width={100} height={100}></Image>
                <Image onClick={((e) => setBackground('Half-Orc'))} value="Half-Orc" className='hover:opacity-50 hover:cursor-pointer' 
                src={HalfOrc} alt='Half-Orc' width={100} height={100}></Image>
            </div>
        </div>
     );
}
 
export default Background;