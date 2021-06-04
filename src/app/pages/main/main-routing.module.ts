import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      {
        path: 'music',
        loadChildren: () => import('./music/music-tab.module').then(p => p.MusicTabPageModule)
      },
      {
        path: 'favorite',
        loadChildren: () => import('./favorite/favorite-tab.module').then(p => p.FavoriteTabPageModule)
      },
      {
        path: '',
        redirectTo: 'music',
        pathMatch: 'full'
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule {}
