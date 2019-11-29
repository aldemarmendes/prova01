import { NgModule } from '@react/core';
import { CommonModule } from '@react/common';
import { FormsModule } from '@react/forms';

import { IonicModule } from '@ionic/react';

import { P2PageRoutingModule } from './p2-routing.module';

import { P2Page } from './p2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    P2PageRoutingModule
  ],
  declarations: [P2Page]
})
export class P2PageModule {}
