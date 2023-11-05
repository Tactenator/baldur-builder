'use client'
import { useGlobalContext } from '@/app/Context'


const SubRaces = () => {

    const { race, subrace, setSubrace } = useGlobalContext()



    return (
        <div>
            { subrace}
            {race === 'Elf' &&
                <div className="bg-hero p-10 w-2/5 border-8 border-gold">
                    <div className="text-center text-3xl text-gold font-bold pb-10 ">Choose your Sub Race</div>
                    <div className="grid grid-cols-2 gap-10">
                        <div onClick={(() => setSubrace('High-Elf'))}>High Elf</div>
                        <div onClick={(() => setSubrace('Wood-Elf'))}>Wood Elf</div>
                    </div>
                </div>
            }
            { race === 'Dwarf' && 
            <div className="bg-hero p-10 w-2/5 border-8 border-gold">
                <div className="text-center text-3xl text-gold font-bold pb-10 ">Choose your Sub Race</div>
                    <div className="grid grid-cols-3 gap-10">
                        <div onClick={(() => setSubrace('Hill Dwarf'))}>Hill Dwarf</div>
                        <div onClick={(() => setSubrace('Mountain Dwarf'))}>Mountain Dwarf</div>
                        <div onClick={(() => setSubrace('Duergar'))}>Duergar</div>
                    </div>
            </div>
            }
            { race === 'Drow' && 
            <div className="bg-hero p-10 w-2/5 border-8 border-gold">
                <div className="text-center text-3xl text-gold font-bold pb-10 ">Choose your Sub Race</div>
                    <div className="grid grid-cols-2 gap-10">
                        <div onClick={(() => setSubrace('Seladrine'))}>Seladrine Drow</div>
                        <div onClick={(() => setSubrace('Lolth'))}>Lolth Drow</div>
                </div>
            </div>
            }{ race === 'Tiefling' && 
            <div className="bg-hero p-10 w-2/5 border-8 border-gold">
                <div className="text-center text-3xl text-gold font-bold pb-10 ">Choose your Sub Race</div>
                    <div className="grid grid-cols-3 gap-10">
                        <div onClick={(() => setSubrace('Asmodeus'))}>Asmodeus Tiefling</div>
                        <div onClick={(() => setSubrace('Mephistopheles'))}>Mephistopheles Tiefling</div>
                        <div onClick={(() => setSubrace('Zariel'))}>Zariel Tiefling</div>
                </div>
            </div>
            }
            { race === 'Halfling' && 
            <div className="bg-hero p-10 w-2/5 border-8 border-gold">
                <div className="text-center text-3xl text-gold font-bold pb-10 ">Choose your Sub Race</div>
                    <div className="grid grid-cols-2 gap-10">
                        <div onClick={(() => setSubrace('Lightfoot'))}>Lightfoot Halfling</div>
                        <div onClick={(() => setSubrace('Strongheart'))}>Strongheart Halfling</div>
                    </div>
            </div>
            }
            { race === 'Half-Elf' &&
            <div className="bg-hero p-10 w-2/5 border-8 border-gold">
            <div className="text-center text-3xl text-gold font-bold pb-10 ">Choose your Sub Race</div>
                <div className="grid grid-cols-3 gap-10">
                    <div onClick={(() => setSubrace('Wood Half-Elf'))}>Wood Half-Elf</div>
                    <div onClick={(() => setSubrace('High Half-Elf'))}>High Half-Elf</div>
                    <div onClick={(() => setSubrace('Drow Half-Elf'))}>Drow Half-Elf</div>
                </div>
            </div>
            }
            { race === 'Gnome' && 
            <div className="bg-hero p-10 w-2/5 border-8 border-gold">
                <div className="text-center text-3xl text-gold font-bold pb-10 ">Choose your Sub Race</div>
                <div className="grid grid-cols-3 gap-10">
                    <div onClick={(() => setSubrace('Rock Gnome'))}>Rock Gnome</div>
                    <div onClick={(() => setSubrace('Deep Gnome'))}>Deep Gnome</div>
                    <div onClick={(() => setSubrace('Forest Gnome'))}>Forest Gnome</div>
                </div>
            </div>
            }
            { race === 'Dragonborn' && 
            <div className="bg-hero p-10 w-2/5 border-8 border-gold">
                <div className="text-center text-3xl text-gold font-bold pb-10 ">Choose your Sub Race</div>
                <div className="grid grid-cols-3 gap-10">
                    <div onClick={(() => setSubrace('Black Dragonborn'))}>Black Dragonborn</div>
                    <div onClick={(() => setSubrace('Blue Dragonborn'))}>Blue Dragonborn</div>
                    <div onClick={(() => setSubrace('Copper Dragonborn'))}>Copper Dragonborn</div>
                    <div onClick={(() => setSubrace('Gold Dragonborn'))}>Gold Dragonborn</div>
                    <div onClick={(() => setSubrace('Green Dragonborn'))}>Green Dragonborn</div>
                    <div onClick={(() => setSubrace('Red Dragonborn'))}>Red Dragonborn</div>
                    <div onClick={(() => setSubrace('Brass Dragonborn'))}>Brass Dragonborn</div>
                    <div onClick={(() => setSubrace('Bronze Dragonborn'))}>Bronze Dragonborn</div>
                    <div onClick={(() => setSubrace('Silver Dragonborn'))}>Silver Dragonborn</div>
                    <div onClick={(() => setSubrace('White Dragonborn'))}>White Dragonborn</div>
                </div>
            </div>
            } 
        </div>
        
     );
}
 
export default SubRaces;