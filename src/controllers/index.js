import { Pokemon } from "../models/Pokemon.js"
import { Abilities } from "../models/Abilities.js"
import { listPokemons, lisDetails } from "./dependencies.js"

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

                fetch(element.url)
                .then(response => response.json())
                .then(element => {
                    
                    element.abilities.forEach(ability =>{
                        let abilityObj = new Abilities()
                        abilityObj.setName(ability.ability.name)
                        lisDetails.addAbilities(abilityObj)
                    })
                })

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

    lisDetails.getAbilities().forEach(item =>{
        let nameAbility = document.createElement("p")
        nameAbility.innerHTML = item.getName()
        ul.appendChild(nameAbility)
    })
})
