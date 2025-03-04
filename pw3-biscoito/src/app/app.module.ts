import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImagemComponent } from './imagem/imagem.component';
import { FraseComponent } from './frase/frase.component';
import { BotaoComponent } from './botao/botao.component';
import { BiscoitoComponent } from './biscoito/biscoito.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagemComponent,
    FraseComponent,
    BotaoComponent,
    BiscoitoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
