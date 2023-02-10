import { Component } from '@angular/core';
import { IAnuncios, anuncios } from '../anuncios'

@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.css']
})
export class AnunciosComponent {

  anuncios: IAnuncios[] = anuncios;

}
