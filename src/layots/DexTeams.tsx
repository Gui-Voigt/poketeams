import '../styles/dexTeams.scss'
import PokeCard from '../components/PokeCard'
import pokeList from '../apiPokedex/apiPokedex'

function DexTeams(){
   pokeList()
    return(
        <div className='DexTeams'>

            <nav>
                <ul>
                    <li>Pokedex</li>
                    <li>Times</li>
                </ul>
            </nav>

            <section>
                <div className='pokedex'>

                    <PokeCard/>
                    <PokeCard/>
                    <PokeCard/>
                    <PokeCard/>
                    <PokeCard/>
                    <PokeCard/>
                    <PokeCard/>
                    <PokeCard/>
                    <PokeCard/>
                    <PokeCard/>
                    <PokeCard/>
                    <PokeCard/>
                    <PokeCard/>
                    <PokeCard/>
                    <PokeCard/>
                    <PokeCard/>
                    <PokeCard/>
                    <PokeCard/>
                    <PokeCard/>
                    <PokeCard/>
                    <PokeCard/>
                    <PokeCard/>
                    <PokeCard/>
                    <PokeCard/>
                 


                </div>
                <div className='teams'></div>
            </section>
        
        </div>
    )
}

export default DexTeams;