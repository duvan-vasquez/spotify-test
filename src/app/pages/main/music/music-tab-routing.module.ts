import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicTabPage } from './music-tab.page';

const routes: Routes = [
  {
    path: '',
    component: MusicTabPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicTabPageRoutingModule {}
