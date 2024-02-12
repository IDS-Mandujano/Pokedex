export class LisDetails{

    #abilities = []
    #moves = []
    #sprites = []

    addAbilities(ability){
        this.#abilities.push(ability)
    }
    getAbilities(){
        return this.#abilities
    }

    addMoves(move){
        this.#moves.push(move)
    }
    getMoves(){
        return this.#moves
    }

    addSprites(sprite){
        this.#sprites.push(sprite)
    }
    getSprite(){
        return this.#sprites
    }

}