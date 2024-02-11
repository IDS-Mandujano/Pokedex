import { Pokemon } from "../models/Pokemon.js"
import { listPokemons } from "./dependencies.js"

const loadData = document.getElementById("loadData")
loadData.addEventListener("click",()=>{

    let url = "https://pokeapi.co/api/v2/pokemon"
    fetch(url)
    .then( response => response.json() 
    ).then(
        data => {

            data.results.forEach(element => {
                let pokemon = new Pokemon()

                pokemon.setName(element.name)

                listPokemons.addListPokemons(pokemon)
            })
        })
})

const viewData = document.getElementById("viewData")
viewData.addEventListener("click",()=>{

    const ul = document.getElementById("printData")
    listPokemons.getListPokemons().forEach(item => {

        let listName = document.createElement("li")

        let name = document.createElement("p")
        name.innerHTML = item.getName()
        listName.appendChild(name)
        
        ul.appendChild(listName)
    })
})
