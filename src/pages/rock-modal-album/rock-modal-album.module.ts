import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RockModalAlbumPage } from './rock-modal-album';

@NgModule({
  declarations: [
    RockModalAlbumPage,
  ],
  imports: [
    IonicPageModule.forChild(RockModalAlbumPage),
  ],
})
export class RockModalAlbumPageModule {}
