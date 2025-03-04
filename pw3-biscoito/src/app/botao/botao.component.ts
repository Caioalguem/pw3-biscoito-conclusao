import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent {
  @Input() primario:boolean = true;
  @Input() texto:string = "Texto";
  @Input() desabilitado:boolean = false;
}
