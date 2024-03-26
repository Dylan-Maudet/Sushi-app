import { Box } from "./Box"

export class Lignes {
    quantite: number
    box: Box

    constructor(quantite: number, box: Box){
        this.quantite = quantite
        this.box = box
    }

    incrementer(){
    this.box.quantiteCommande += 1
  }

    decrementer(){
        if(this.box.quantiteCommande > 0){
        this.box.quantiteCommande -= 1
        }
    }
}