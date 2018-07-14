import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopModalAlbumPage } from './pop-modal-album';

@NgModule({
  declarations: [
    PopModalAlbumPage,
  ],
  imports: [
    IonicPageModule.forChild(PopModalAlbumPage),
  ],
})
export class PopModalAlbumPageModule {}
