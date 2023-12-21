'use client'
import { useGlobalContext } from '@/app/Context'


const SubRaces = () => {

    const { race, subRace, setSubRace } = useGlobalContext()
    
    return (
        <div>
            { subRace}
            {race === 'Elf' &&
                <div className="bg-hero p-10 w-2/5 border-8 border-gold">
                    <div className="text-center text-3xl text-gold font-bold pb-10 ">Choose your Sub Race</div>
                    <div className="grid grid-cols-2 gap-10 place-items-center">
                        <div class="bg-gold text-white px-7 py-5 w-1/2 font-bold text-center rounded-xl hover:cursor-pointer hover:opacity-75" onClick={(() => setSubRace('High-Elf'))}>High Elf</div>
                        <div class="bg-gold text-white px-7 py-5 w-1/2 font-bold text-center rounded-xl hover:cursor-pointer hover:opacity-75" onClick={(() => setSubRace('Wood-Elf'))}>Wood Elf</div>
                    </div>
                </div>
            }
            { race === 'Dwarf' && 
            <div className="bg-hero p-10 w-2/5 border-8 border-gold">
                <div className="text-center text-3xl text-gold font-bold pb-10 ">Choose your Sub Race</div>
                    <div className="grid grid-cols-3 gap-10 place-items-center">
                        <div class="bg-gold text-white px-7 py-5 font-bold text-center rounded-xl hover:cursor-pointer hover:opacity-75" onClick={(() => setSubRace('Hill Dwarf'))}>Hill Dwarf</div>
                        <div class="bg-gold text-white px-7 py-5 font-bold text-center rounded-xl hover:cursor-pointer hover:opacity-75" onClick={(() => setSubRace('Mountain Dwarf'))}>Mountain Dwarf</div>
                        <div class="bg-gold text-white px-7 py-5 font-bold text-center rounded-xl hover:cursor-pointer hover:opacity-75" onClick={(() => setSubRace('Duergar'))}>Duergar</div>
                    </div>
            </div>
            }
            { race === 'Drow' && 
            <div className="bg-hero p-10 w-2/5 border-8 border-gold">
                <div className="text-center text-3xl text-gold font-bold pb-10 ">Choose your Sub Race</div>
                    <div className="grid grid-cols-2 gap-10 place-items-center">
                        <div class="bg-gold text-white px-7 py-5 w-1/2 font-bold text-center rounded-xl hover:cursor-pointer hover:opacity-75" onClick={(() => setSubRace('Seladrine'))}>Seladrine Drow</div>
                        <div class="bg-gold text-white px-7 py-5 w-1/2 font-bold text-center rounded-xl hover:cursor-pointer hover:opacity-75" onClick={(() => setSubRace('Lolth'))}>Lolth Drow</div>
                </div>
            </div>
            }{ race === 'Tiefling' && 
            <div className="bg-hero p-10 w-2/5 border-8 border-gold">
                <div className="text-center text-3xl text-gold font-bold pb-10 ">Choose your Sub Race</div>
                    <div className="grid grid-cols-3 gap-10 place-items-center">
                        <div class="bg-gold text-white px-7 py-5 font-bold text-center rounded-xl hover:cursor-pointer hover:opacity-75" onClick={(() => setSubRace('Asmodeus'))}>Asmodeus Tiefling</div>
                        <div class="bg-gold text-white px-7 py-5 font-bold text-center rounded-xl hover:cursor-pointer hover:opacity-75" onClick={(() => setSubRace('Mephistopheles'))}>Mephistopheles Tiefling</div>
                        <div class="bg-gold text-white px-7 py-5 font-bold text-center rounded-xl hover:cursor-pointer hover:opacity-75" onClick={(() => setSubRace('Zariel'))}>Zariel Tiefling</div>
                </div>
            </div>
            }
            { race === 'Halfling' && 
            <div className="bg-hero p-10 w-2/5 border-8 border-gold">
                <div className="text-center text-3xl text-gold font-bold pb-10 ">Choose your Sub Race</div>
                    <div className="grid grid-cols-2 gap-10 place-items-center">
                        <div class="bg-gold text-white px-7 py-5 w-1/2 font-bold text-center rounded-xl hover:cursor-pointer hover:opacity-75" onClick={(() => setSubRace('Lightfoot'))}>Lightfoot Halfling</div>
                        <div class="bg-gold text-white px-7 py-5 w-1/2 font-bold text-center rounded-xl hover:cursor-pointer hover:opacity-75" onClick={(() => setSubRace('Strongheart'))}>Strongheart Halfling</div>
                    </div>
            </div>
            }
            { race === 'Half-Elf' &&
            <div className="bg-hero p-10 w-2/5 border-8 border-gold">
            <div className="text-center text-3xl text-gold font-bold pb-10 ">Choose your Sub Race</div>
                <div className="grid grid-cols-3 gap-10 place-items-center">
                    <div class="bg-gold text-white px-7 py-5 font-bold text-center rounded-xl hover:cursor-pointer hover:opacity-75" onClick={(() => setSubRace('Wood Half-Elf'))}>Wood Half-Elf</div>
                    <div class="bg-gold text-white px-7 py-5 font-bold text-center rounded-xl hover:cursor-pointer hover:opacity-75" onClick={(() => setSubRace('High Half-Elf'))}>High Half-Elf</div>
                    <div class="bg-gold text-white px-7 py-5 font-bold text-center rounded-xl hover:cursor-pointer hover:opacity-75" onClick={(() => setSubRace('Drow Half-Elf'))}>Drow Half-Elf</div>
                </div>
            </div>
            }
            { race === 'Gnome' && 
            <div className="bg-hero p-10 w-2/5 border-8 border-gold">
                <div className="text-center text-3xl text-gold font-bold pb-10 ">Choose your Sub Race</div>
                <div className="grid grid-cols-3 gap-10 place-items-center">
                    <div class="bg-gold text-white px-7 py-5 font-bold text-center rounded-xl hover:cursor-pointer hover:opacity-75" onClick={(() => setSubRace('Rock Gnome'))}>Rock Gnome</div>
                    <div class="bg-gold text-white px-7 py-5 font-bold text-center rounded-xl hover:cursor-pointer hover:opacity-75" onClick={(() => setSubRace('Deep Gnome'))}>Deep Gnome</div>
                    <div class="bg-gold text-white px-7 py-5 font-bold text-center rounded-xl hover:cursor-pointer hover:opacity-75" onClick={(() => setSubRace('Forest Gnome'))}>Forest Gnome</div>
                </div>
            </div>
            }
            { race === 'Dragonborn' && 
            <div className="bg-hero p-10 w-2/5 border-8 border-gold">
                <div className="text-center text-3xl text-gold font-bold pb-10 ">Choose your Sub Race</div>
                <div className="grid grid-cols-3 gap-10 place-items-center">
                    <div class="bg-gold text-white px-7 py-5 font-bold text-center rounded-xl hover:cursor-pointer hover:opacity-75" onClick={(() => setSubRace('Black Dragonborn'))}>Black Dragonborn</div>
                    <div class="bg-gold text-white px-7 py-5 font-bold text-center rounded-xl hover:cursor-pointer hover:opacity-75" onClick={(() => setSubRace('Blue Dragonborn'))}>Blue Dragonborn</div>
                    <div class="bg-gold text-white px-7 py-5 font-bold text-center rounded-xl hover:cursor-pointer hover:opacity-75" onClick={(() => setSubRace('Copper Dragonborn'))}>Copper Dragonborn</div>
                    <div class="bg-gold text-white px-7 py-5 font-bold text-center rounded-xl hover:cursor-pointer hover:opacity-75" onClick={(() => setSubRace('Gold Dragonborn'))}>Gold Dragonborn</div>
                    <div class="bg-gold text-white px-7 py-5 font-bold text-center rounded-xl hover:cursor-pointer hover:opacity-75" onClick={(() => setSubRace('Green Dragonborn'))}>Green Dragonborn</div>
                    <div class="bg-gold text-white px-7 py-5 font-bold text-center rounded-xl hover:cursor-pointer hover:opacity-75" onClick={(() => setSubRace('Red Dragonborn'))}>Red Dragonborn</div>
                    <div class="bg-gold text-white px-7 py-5 font-bold text-center rounded-xl hover:cursor-pointer hover:opacity-75" onClick={(() => setSubRace('Brass Dragonborn'))}>Brass Dragonborn</div>
                    <div class="bg-gold text-white px-7 py-5 font-bold text-center rounded-xl hover:cursor-pointer hover:opacity-75" onClick={(() => setSubRace('Bronze Dragonborn'))}>Bronze Dragonborn</div>
                    <div class="bg-gold text-white px-7 py-5 font-bold text-center rounded-xl hover:cursor-pointer hover:opacity-75" onClick={(() => setSubRace('Silver Dragonborn'))}>Silver Dragonborn</div>
                    <div class="bg-gold text-white px-7 py-5 font-bold text-center rounded-xl hover:cursor-pointer hover:opacity-75" onClick={(() => setSubRace('White Dragonborn'))}>White Dragonborn</div>
                </div>
            </div>
            } 
        </div>
        
     );
}
 
export default SubRaces;