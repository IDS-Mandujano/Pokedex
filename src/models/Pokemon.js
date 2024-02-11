export class Pokemon{
    #name

    setName(name){
        this.#name = name
    }
    getName(){
        return this.#name
    }
}