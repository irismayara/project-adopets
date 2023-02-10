import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasaRacoesComponent } from './casa-racoes/casa-racoes.component';
import { LarAnimaisComponent } from './lar-animais/lar-animais.component';

const routes: Routes = [
  { path: 'feed', loadChildren: () => import('./feed/feed.module').then(m => m.FeedModule) },
  { path: 'anuncios', loadChildren: () => import('./anuncios/anuncios.module').then(m => m.AnunciosModule) },
  { path: 'lar', component: LarAnimaisComponent },
  { path: 'casa', component: CasaRacoesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
