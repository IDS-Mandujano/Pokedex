export class Pokemon{

    #name
    #urlDetails

    setName(name){
        this.#name = name
    }
    getName(){
        return this.#name
    }

    setUrlDetails(url){
        this.#urlDetails = url
    }
    getUrlDetails(){
        return this.#urlDetails
    }

}