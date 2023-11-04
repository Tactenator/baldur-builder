'use client'
import { useGlobalContext } from '@/app/Context'


const Races = () => {

    const { race, subrace, setSubrace } = useGlobalContext()
    return ( 
        <div className="bg-hero p-10 w-2/5 border-8 border-gold">
            <div className="text-center text-3xl text-gold font-bold pb-10 ">Choose your Race</div>
            <div className="grid grid-cols-4 gap-10">
                {/* <button onClick={((e) => setRace('Elf'))} value="Elf" ><Image value="Elf"
                className='hover:opacity-50 hover:cursor-pointer' src={Elf} alt='Elf' width={100} height={100}></Image></button>
                <Image onClick={((e) => setRace('Tiefling'))} value="Tiefling" className='hover:opacity-50 hover:cursor-pointer' 
                src={Tiefling} alt='Tiefling' width={100} height={100}></Image>
                <Image onClick={((e) => setRace('Drow'))} value="Drow" className='hover:opacity-50 hover:cursor-pointer' 
                src={Drow} alt='Drow' width={100} height={100}></Image>
                <Image onClick={((e) => setRace('Human'))} value="Human" className='hover:opacity-50 hover:cursor-pointer' 
                src={Human} alt='Human' width={100} height={100}></Image>
                <Image onClick={((e) => setRace('Githyanki'))} value="Githyanki" className='hover:opacity-50 hover:cursor-pointer' 
                src={Githyanki} alt='Githyanki' width={100} height={100}></Image>
                <Image onClick={((e) => setRace('Dwarf'))} value="Dwarf" className='hover:opacity-50 hover:cursor-pointer'
                src={Dwarf} alt='Dwarf' width={100} height={100}></Image>
                <Image onClick={((e) => setRace('Half-Elf'))} value="Half-Elf" className='hover:opacity-50 hover:cursor-pointer' 
                src={HalfElf} alt='Half-Elf' width={100} height={100}></Image>
                <Image onClick={((e) => setRace('Halfling'))} value="Halfling" className='hover:opacity-50 hover:cursor-pointer' 
                src={Halfling} alt='Halfling' width={100} height={100}></Image>
                <Image onClick={((e) => setRace('Gnome'))} value="Gnome" className='hover:opacity-50 hover:cursor-pointer' 
                src={Gnome} alt='Gnome' width={100} height={100}></Image>
                <Image onClick={((e) => setRace('Dragonborn'))} value="Dragonborn" className='hover:opacity-50 hover:cursor-pointer' 
                src={DragonBorn} alt='Dragonborn' width={100} height={100}></Image>
                <Image onClick={((e) => setRace('Half-Orc'))} value="Half-Orc" className='hover:opacity-50 hover:cursor-pointer' 
                src={HalfOrc} alt='Half-Orc' width={100} height={100}></Image> */}
            </div>
        </div>
     );
}
 
export default Races;