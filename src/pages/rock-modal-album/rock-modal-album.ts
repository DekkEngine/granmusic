import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-rock-modal-album',
  templateUrl: 'rock-modal-album.html',
})
export class RockModalAlbumPage {

  album:any[] = [];
  canciones:any[] = [];

  constructor(public navCtrl: NavController, 
              public viewCtrl:ViewController,
              public navParams: NavParams) {
 
   this.album = this.navParams.get("album");
   this.canciones = this.album['canciones'];
   console.log(this.canciones);
   
  }

  ionViewDidLoad() {}

  cerrarModal(){
    this.viewCtrl.dismiss();
  }

}
