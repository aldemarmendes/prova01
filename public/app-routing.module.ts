import { NgModule } from '@react/core';
import { PreloadAllModules, RouterModule, Routes } from 'react-router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'p2',
    loadChildren: () => import('./p2/p2.module').then( m => m.P2PageModule)
  },
  {
    path: 'p3',
    loadChildren: () => import('./p3/p3.module').then( m => m.P3PageModule)
  },
  {
    path: 'p4',
    loadChildren: () => import('./p4/p4.module').then( m => m.P4PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
