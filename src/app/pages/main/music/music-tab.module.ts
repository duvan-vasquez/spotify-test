import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MusicTabPage } from './music-tab.page';
import { MusicTabPageRoutingModule } from './music-tab-routing.module';
import { ComponentModule } from 'src/app/components/component.module';
import { ItemPlayListMolecule } from 'src/app/components/molecules/item-play-list/item-play-list.molecule.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    MusicTabPageRoutingModule
  ],
  entryComponents: [ItemPlayListMolecule],
  declarations: [MusicTabPage]
})
export class MusicTabPageModule {}
