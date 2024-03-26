import { Box } from '../models/Box';
import { Lignes } from '../models/Lignes';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  panier: Lignes[]

  constructor() {
    this.panier = JSON.parse(localStorage.getItem("panier") ?? "[]")
  }

  updatePanier(uneBox: Box, qte: number){
    const index = this.panier.findIndex(ligne => ligne.box.id == uneBox.id);

    if(index > -1){
      if(qte > 0){
        this.panier[index].quantite = qte;
      } else {
        this.panier.splice(index, 1);
      }
    } else if(qte > 0){
      const nouvelleLigne = new Lignes(qte, uneBox);
      this.panier.push(nouvelleLigne);
    }
    localStorage.setItem("panier", JSON.stringify(this.panier))
    console.log(this.panier)
  }

  getPrixTotal(): number {
    let prixTotal = 0;

    this.panier.forEach(ligne => {
      prixTotal += ligne.box.prix * ligne.quantite;
    });
  
    return prixTotal;

  }

}
