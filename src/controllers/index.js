import { Pokemon } from "../models/Pokemon.js" 
import { listPockemons } from "./dependencies.js"

let loadData = document.getElementById("loadData")
loadData.addEventListener("click",()=>{

    let apiUrl = "https://pokeapi.co/api/v2/pokemon"
    fetch(apiUrl).then(
        response => response.json()
    ).then(

        data => {
            data.results.forEach(element => {
                let pokemon = new Pokemon()

                pokemon.setName(element.name)
                listPockemons.addCharacter(pokemon)
                
                fetch(element.url).
                then(response => response.json()).
                then(element => console.log(element))
            })
        })
})

let viewData = document.getElementById("viewData")
viewData.addEventListener("click",()=>{

    const ul = document.getElementById("printData")
    listPockemons.getCharacters().forEach(item => {

        let listCharacters = document.createElement("li")
        let pokemonContainer = document.createElement("div")

        let name = document.createElement("p")
        name.innerHTML = item.getName()
        pokemonContainer.appendChild(name)

        ul.appendChild(listCharacters)
    })

})