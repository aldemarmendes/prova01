import { NgModule } from '@react/core';
import { CommonModule } from '@react/common';
import { FormsModule } from '@react/forms';

import { IonicModule } from '@ionic/react';

import { P3PageRoutingModule } from './p3-routing.module';

import { P3Page } from './p3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    P3PageRoutingModule
  ],
  declarations: [P3Page]
})
export class P3PageModule {}
