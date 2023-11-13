import { useGlobalContext } from '@/app/Context';

const CharacterInfo = () => {

    const { race, level, subRace, playerClass } = useContext(useGlobalContext)
    return ( 
        <div className="flex flex-col bg-hero border-8 border-gold w-2/5">
            { race }
        </div>
     );
}
 
export default CharacterInfo;