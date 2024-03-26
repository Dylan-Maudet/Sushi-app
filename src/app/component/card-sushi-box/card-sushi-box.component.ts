import { Component, Input } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Box } from '../../models/Box';

@Component({
  selector: 'app-card-sushi-box',
  templateUrl: './card-sushi-box.component.html',
  styleUrl: './card-sushi-box.component.css'
})

export class CardSushiBoxComponent {
  pathImage = environment.apiGetImages;
  @Input() box: Box = new Box();

  incrementer(){
    this.box.quantiteCommande += 1
  }

  decrementer(){
    if(this.box.quantiteCommande > 0){
      this.box.quantiteCommande -= 1
    }
  }

}
