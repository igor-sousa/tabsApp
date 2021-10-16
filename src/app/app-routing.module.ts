import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'venom',
    loadChildren: () => import('./filmes/venom/venom.module').then( m => m.VenomPageModule)
  },
  {
    path: 'thechase',
    loadChildren: () => import('./filmes/thechase/thechase.module').then( m => m.ThechasePageModule)
  },
  {
    path: 'dados-filme',
    loadChildren: () => import('./filmes/dados-filme/dados-filme.module').then( m => m.DadosFilmePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
