export class ListPokemons{
    #pokemons = []

    addListPokemons(pokemon){
        this.#pokemons.push(pokemon)
    }

    getListPokemons(){
        return this.#pokemons
    }
}