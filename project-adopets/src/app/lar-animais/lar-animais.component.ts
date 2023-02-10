import { Component } from '@angular/core';
import { ILarAnimais, lares } from '../larAnimais';

@Component({
  selector: 'app-lar-animais',
  templateUrl: './lar-animais.component.html',
  styleUrls: ['./lar-animais.component.css']
})
export class LarAnimaisComponent {
  lares : ILarAnimais[] = lares;
}
