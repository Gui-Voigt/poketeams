import axios from 'axios'

function pokedexRequest() : ([]|void) {
    
    var pokeNumberList:[] = []

    axios.get("https://pokeapi.co/api/v2/pokedex/kanto")
        .then( (reponse) => {
            pokeNumberList = (reponse.data.pokemon_entries)
            pokedexGenerator(pokeNumberList)
        })
        .catch( (err) => console.log(err + "an error occour with the request"))
   
}

function pokedexGenerator(pokeNumberList:[]):[] {

    interface PokeInterface {
        name: string;
        type1: string;
        type2: string;
    }

    let pokeList:PokeInterface[]
    

    //pokeList não está sendo reconhecido como Array para que se faça o push


    pokeNumberList.forEach(
        (pokemon) => {
            axios.get("https://pokeapi.co/api/v2/pokemon/" + pokemon.entry_number )
            .then((response) => {
                pokeList.push({
                    name : response.data.name,
                    type1 : response.data.types[0].type,
                    type2 : response.data.types[1].type,
                })

            })
            .catch((err) => console.log(err + "an error occour with the pokemon request"))
        }
    )
    return []

}

export default pokedexRequest