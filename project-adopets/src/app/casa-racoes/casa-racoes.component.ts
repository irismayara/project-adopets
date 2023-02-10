import { Component } from '@angular/core';
import { ICasaRacoes, casas } from '../casaRacoes';

@Component({
  selector: 'app-casa-racoes',
  templateUrl: './casa-racoes.component.html',
  styleUrls: ['./casa-racoes.component.css']
})
export class CasaRacoesComponent {

  casas:  ICasaRacoes[] = casas;

}
