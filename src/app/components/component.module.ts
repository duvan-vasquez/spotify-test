import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EmailInputAtom } from './molecules/Validators/email-input/email-input.component';
import { PasswordInputAtom } from './molecules/Validators/password-input/password-input.component';
import { HeaderOrganism } from './organisms/header/header.organism.component';
import { MenuOrganism } from './organisms/menu/menu.organism.component';
import { ItemPlayListMolecule } from './molecules/item-play-list/item-play-list.molecule.component';
import { ItemSaveTrackListMolecule } from './molecules/item-saved-track/item-save-track-list.molecule.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule
  ],
  declarations: [MenuOrganism, ItemSaveTrackListMolecule, EmailInputAtom, PasswordInputAtom, HeaderOrganism, ItemPlayListMolecule],
  entryComponents: [MenuOrganism,ItemSaveTrackListMolecule, EmailInputAtom, PasswordInputAtom, HeaderOrganism, ItemPlayListMolecule],
  exports: [MenuOrganism, ItemSaveTrackListMolecule, EmailInputAtom, PasswordInputAtom, HeaderOrganism, ItemPlayListMolecule]
})
export class ComponentModule {}
