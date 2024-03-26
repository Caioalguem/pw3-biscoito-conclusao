import { Component } from '@angular/core';

@Component({
  selector: 'app-biscoito',
  templateUrl: './biscoito.component.html',
  styleUrls: ['./biscoito.component.css']
})
export class BiscoitoComponent {
  biscoitoQuebrado:boolean = false;

  quebrar(){
    this.biscoitoQuebrado = !this.biscoitoQuebrado;
  }
  reiniciar(){
    this.biscoitoQuebrado = !this.biscoitoQuebrado;
    
  }
}
