import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThechasePage } from './thechase.page';

const routes: Routes = [
  {
    path: '',
    component: ThechasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThechasePageRoutingModule {}
