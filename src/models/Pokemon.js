export class Pokemon {
    #name
    #abilities = []
    #moves = []
    #image

    setName(name){
        this.#name = name
    }
    getName(){
        return this.#name
    }

    addAbility(ability){
        this.#abilities.push(ability)
    }
    getAbilities() {
        return this.#abilities
    }

    addMove(move){
        this.#moves.push(move)
    }
    getMoves(){
        return this.#moves
    }

    setImage(url){
        this.#image = url
    }
    getImage(){
        return this.#image
    }
}
