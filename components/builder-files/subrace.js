'use client'
import { useGlobalContext } from '@/app/Context'


const SubRaces = () => {

    const { race, subrace, setSubrace } = useGlobalContext()

    return (
        <div>
            {race === 'Elf' || race === 'Dwarf' || race === 'Drow' || race === 'Tiefling' || race === 'Halfling' || race === "Half-Elf" || race === "Gnome" || race === "Dragonborn" &&
            <div className="bg-hero p-10 w-2/5 border-8 border-gold">
            <div className="text-center text-3xl text-gold font-bold pb-10 ">Choose your Race</div>
            { race === 'Elf' && 
            <div className="grid grid-cols-2 gap-10">
                <div>High Elf</div>
                <div>Wood Elf</div>
            </div>
            }
            { race === 'Dwarf' && 
            <div className="grid grid-cols-3 gap-10">
                <div>Hill Dwarf</div>
                <div>Mountain Dwarf</div>
                <div>Duergar</div>
            </div>
            }
            { race === 'Drow' && 
            <div className="grid grid-cols-2 gap-10">
                <div>Seladrine Drow</div>
                <div>Lolth Drow</div>
            </div>
            }{ race === 'Tiefling' && 
            <div className="grid grid-cols-3 gap-10">
                <div>Asmodeus Tiefling</div>
                <div>Mephistopheles Tiefling</div>
                <div>Zariel Tiefling</div>
            </div>
            }
            { race === 'Halfling' && 
            <div className="grid grid-cols-2 gap-10">
                <div>Lightfoot Halfling</div>
                <div>Strongheart Halfling</div>
            </div>
            }
            { race === 'Half-Elf' && 
            <div className="grid grid-cols-3 gap-10">
                <div>Wood Half-Elf</div>
                <div>High Half-Elf</div>
                <div>Drow Half-Elf</div>
            </div>
            }
            { race === 'Gnome' && 
            <div className="grid grid-cols-3 gap-10">
                <div>Rock Gnome</div>
                <div>Deep Gnome</div>
                <div>Forest Gnome</div>
            </div>
            }
            { race === 'Dragonborn' && 
            <div className="grid grid-cols-3 gap-10">
                <div>Black Dragonborn</div>
                <div>Blue Dragonborn</div>
                <div>Copper Dragonborn</div>
                <div>Gold Dragonborn</div>
                <div>Green Dragonborn</div>
                <div>Red Dragonborn</div>
                <div>Brass Dragonborn</div>
                <div>Bronze Dragonborn</div>
                <div>Silver Dragonborn</div>
                <div>White Dragonborn</div>
            </div>
            }
        </div>
            }
            
        </div>
        
     );
}
 
export default SubRaces;