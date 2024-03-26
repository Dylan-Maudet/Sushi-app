import { Component } from '@angular/core';
import { Lignes } from '../../models/Lignes';
import { PanierService } from '../../service/panier-service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent {

  panier: Array<Lignes>

  constructor(private panierService: PanierService){
    this.panier = this.panierService.panier
  }
  
  getPrixTotal(){
    return this.panierService.getPrixTotal()
  }

  validerCommande(){
    
  }

}
