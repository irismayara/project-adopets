import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnunciosRoutingModule } from './anuncios-routing.module';
import { AnunciosComponent } from './anuncios.component';


@NgModule({
  declarations: [
    AnunciosComponent
  ],
  imports: [
    CommonModule,
    AnunciosRoutingModule
  ]
})
export class AnunciosModule { }
