import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteTabPage } from './favorite-tab.page';

const routes: Routes = [
  {
    path: '',
    component: FavoriteTabPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoriteTabPageRoutingModule {}
