import { Component, Input } from '@angular/core';
//Leonardo Sirpa Pilco e Caio dos Santos 3ai
@Component({
  selector: 'app-frase',
  templateUrl: './frase.component.html',
  styleUrls: ['./frase.component.css']
})
export class FraseComponent {
  @Input() oculto:boolean = false;
  frases:Array<string> = ["Um dia lindo é composto de cores frias",
   "Morte é o seu futuro",
   "Se expressarmos gratidão pelo que temos, teremos mais por que expressar gratidão.",
   "Leo é o seu nome",
   "Desejar algo maior pra sua vida não significa que você está insatisfeito com o que tem.",
   "Só tenho a agradecer a cada um dos desafios que me trouxeram até aqui, que me fizeram crescer e aprender tantas coisas!",
   "É mais uma do LP",
   "Tenho uma profunda gratidão por cada lição que aprendi no passado. Afinal, foram elas que me permitiram chegar até aqui!",
   "Lembre-se do seu passado com carinho. Afinal, é por causa dele que você está aqui hoje!",
   "Com o coração cheio de gratidão, sei que sou capaz de superar qualquer obstáculo que a vida apresentar!"]
   numFrase = Math.floor(Math.random() * this.frases.length);
   fraseAleatoria:string = this.frases[this.numFrase];
}
