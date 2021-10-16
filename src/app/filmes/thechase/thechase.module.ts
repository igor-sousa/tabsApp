import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThechasePageRoutingModule } from './thechase-routing.module';

import { ThechasePage } from './thechase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThechasePageRoutingModule
  ],
  declarations: [ThechasePage]
})
export class ThechasePageModule {}
