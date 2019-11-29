import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { P4PageRoutingModule } from './p4-routing.module';

import { P4Page } from './p4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    P4PageRoutingModule
  ],
  declarations: [P4Page]
})
export class P4PageModule {}
