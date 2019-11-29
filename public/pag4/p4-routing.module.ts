import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { P4Page } from './p4.page';

const routes: Routes = [
  {
    path: '',
    component: P4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class P4PageRoutingModule {}
