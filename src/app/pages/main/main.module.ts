import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MainPage } from './main.page';
import { MainPageRoutingModule } from './main-routing.module';
import { ComponentModule } from 'src/app/components/component.module';
import { ItemPlayListMolecule } from 'src/app/components/molecules/item-play-list/item-play-list.molecule.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    MainPageRoutingModule
  ],
  declarations: [MainPage],
  entryComponents: [ItemPlayListMolecule]
})
export class MainPageModule {}
