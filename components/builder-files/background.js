'use client'
import { useGlobalContext } from '@/app/Context'

import Image from 'next/image';

import  Acolyte  from '../../public/images/background/acolyte.webp'
import  Charlatan  from '../../public/images/background/charlatan.webp'
import  Criminal  from '../../public/images/background/criminal.webp'
import  Entertainer  from '../../public/images/background/entertainer.webp'
import  FolkHero  from '../../public/images/background/folk_hero.webp'
import  Artisan  from '../../public/images/background/artisan.webp'
import  Noble from '../../public/images/background/noble.webp'
import  Outlander  from '../../public/images/background/outlander.webp'
import  Sage  from '../../public/images/background/sage.webp'
import  Soldier  from '../../public/images/background/soldier.webp'
import  Urchin  from '../../public/images/background/urchin.webp' 

const Background = () => {

    const { background, setBackground } = useGlobalContext()

    return ( 
        <div className="bg-hero p-10 w-2/5 border-8 border-gold">
            <div className="text-center text-3xl text-gold font-bold pb-10 ">Choose your Background</div>
            { background }
            <div className="grid grid-cols-4 gap-10">
                <div className='flex flex-col items-center'>
                    <Image onClick={((e) => setBackground('Acolyte'))} value="Acolyte" 
                    className='hover:opacity-50 hover:cursor-pointer' src={Acolyte} alt='Acolyte' width={100} height={100} />
                    <p className='text-gold'>Acolyte</p>
                </div>
                <div className='flex flex-col items-center'>
                    <Image onClick={((e) => setBackground('Charlatan'))} value="Charlatan" className='hover:opacity-50 hover:cursor-pointer' 
                    src={Charlatan} alt='Charlatan' width={100} height={100} />
                    <p className='text-gold'>Charlatan</p>
                </div>
                <div className='flex flex-col items-center'>
                    <Image onClick={((e) => setBackground('Criminal'))} value="Criminal" className='hover:opacity-50 hover:cursor-pointer' 
                    src={Criminal} alt='Criminal' width={100} height={100}></Image>
                    <p className='text-gold'>Criminal</p>
                </div>
                <div className='flex flex-col items-center'>
                    <Image onClick={((e) => setBackground('Entertainer'))} value="Entertainer" className='hover:opacity-50 hover:cursor-pointer' 
                    src={Entertainer} alt='Entertainer' width={100} height={100}></Image>
                    <p className='text-gold'>Entertainer</p>
                </div>
                <div className='flex flex-col items-center'>
                    <Image onClick={((e) => setBackground('Folk Hero'))} value="Folk Hero" className='hover:opacity-50 hover:cursor-pointer' 
                    src={FolkHero} alt='Folk Hero' width={100} height={100}></Image>
                    <p className='text-gold'>Folk Hero</p>
                </div>
                <div className='flex flex-col items-center'>
                    <Image onClick={((e) => setBackground('Artisan'))} value="Artisan" className='hover:opacity-50 hover:cursor-pointer'
                    src={Artisan} alt='Artisan' width={100} height={100}></Image>
                    <p className='text-gold'>Artisan</p>
                </div>
                <div className='flex flex-col items-center'>
                    <Image onClick={((e) => setBackground('Noble'))} value="Noble" className='hover:opacity-50 hover:cursor-pointer' 
                    src={Noble} alt='Noble' width={100} height={100}></Image>
                    <p className='text-gold'>Noble</p>
                </div>
                <div className='flex flex-col items-center'>
                    <Image onClick={((e) => setBackground('Outlander'))} value="Outlander" className='hover:opacity-50 hover:cursor-pointer' 
                    src={Outlander} alt='Outlander' width={100} height={100}></Image>
                    <p className='text-gold'>Outlander</p>
                </div>
                <div className='flex flex-col items-center'>
                    <Image onClick={((e) => setBackground('Sage'))} value="Sage" className='hover:opacity-50 hover:cursor-pointer' 
                    src={Sage} alt='Sage' width={100} height={100}></Image>
                    <p className='text-gold'>Sage</p>
                </div>
                <div className='flex flex-col items-center'>
                    <Image onClick={((e) => setBackground('Soldier'))} value="Soldier" className='hover:opacity-50 hover:cursor-pointer' 
                    src={Soldier} alt='Soldier' width={100} height={100}></Image>
                    <p className='text-gold'>Soldier</p>
                </div>
                <div className='flex flex-col items-center'>
                    <Image onClick={((e) => setBackground('Urchin'))} value="Urchin" className='hover:opacity-50 hover:cursor-pointer' 
                    src={Urchin} alt='Urchin' width={100} height={100}></Image>
                    <p className='text-gold'>Urchin</p>
                </div>
               
            </div>
        </div>
     );
}
 
export default Background;