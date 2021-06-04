import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { FavoriteTabPage } from './favorite-tab.page';
import { FavoriteTabPageRoutingModule } from './favorite-tab-routing.module';
import { ComponentModule } from 'src/app/components/component.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    FavoriteTabPageRoutingModule
  ],
  entryComponents: [],
  declarations: [FavoriteTabPage]
})
export class FavoriteTabPageModule {}
