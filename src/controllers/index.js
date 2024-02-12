import { Pokemon } from "../models/Pokemon.js"
import { Abilities } from "../models/Abilities.js"
import { Moves } from "../models/Moves.js"
import { listPokemons } from "./dependencies.js"

const loadData = document.getElementById("loadData")
loadData.addEventListener("click", () => {

    let url = "https://pokeapi.co/api/v2/pokemon"
    fetch(url)
        .then(response => response.json())
        .then(data => {

            data.results.forEach(element => {
                let pokemon = new Pokemon()
                pokemon.setName(element.name)

                fetch(element.url)
                    .then(response => response.json())
                    .then(elementData => {
                        elementData.abilities.forEach(ability => {
                            let abilityObj = new Abilities()
                            abilityObj.setName(ability.ability.name)
                            pokemon.addAbility(abilityObj)
                            pokemon.setImage(elementData.sprites.front_default)
                        })

                        elementData.moves.forEach(move =>{
                            let mv = new Moves()
                            mv.setName(move.move.name)
                            pokemon.addMove(mv)
                        })
                    })           

                listPokemons.addListPokemons(pokemon)
            })
        })
})

const viewData = document.getElementById("viewData")
viewData.addEventListener("click", () => {

    const div = document.getElementById("printData")
    listPokemons.getListPokemons().forEach(pokemon => {
        let cardsContainer = document.createElement("div")
        cardsContainer.classList.add("container-pokemon")

        let divName = document.createElement("div")
        divName.classList.add("name-pokemon")
        let name = document.createElement("p")
        name.innerHTML = pokemon.getName()
        divName.appendChild(name)
        cardsContainer.appendChild(divName)

        let divImg = document.createElement("div")
        divImg.classList.add("img-pokemon")
        let img = document.createElement("img")
        img.setAttribute("src",pokemon.getImage())
        divImg.appendChild(img)
        cardsContainer.appendChild(divImg)

        
        let divAbility = document.createElement("div")
        divAbility.classList.add("ability-name")
        pokemon.getAbilities().forEach(ability => {
            let nameAbility = document.createElement("p")
            nameAbility.innerHTML = ability.getName()
            divAbility.appendChild(nameAbility)
            cardsContainer.appendChild(divAbility)
        })

        let divBtn = document.createElement("div")
        divBtn.classList.add("btn-ability")
        let viewAbilities = document.createElement("button")
        viewAbilities.innerText = "Ver habilidades"
        viewAbilities.addEventListener("click",()=>{
            
            let modal = document.createElement("div")
            modal.classList.add("modal")
            let ul = document.createElement("ul")
            ul.classList.add("ul-modal")
            pokemon.getMoves().forEach(move => {
                let li = document.createElement("li")
                li.classList.add("li-modal")
                li.innerText = move.getName()
                ul.appendChild(li)
            })

            modal.appendChild(ul)
            document.body.appendChild(modal)
            modal.addEventListener("click",()=>{
                modal.remove()
            })

        })
        divBtn.appendChild(viewAbilities)
        cardsContainer.appendChild(divBtn)

        div.appendChild(cardsContainer)
    })
})

