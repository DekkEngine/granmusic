import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { RockPerfilPage } from '../rock-perfil/rock-perfil';

@IonicPage()
@Component({
  selector: 'page-rock-categoria',
  templateUrl: 'rock-categoria.html',
})
export class RockCategoriaPage {

  rock:any[] = [];

  constructor(public navCtrl: NavController, 
              private _fs:FirebaseProvider,
              public navParams: NavParams) {

    _fs.getRock().subscribe( rock => {
      this.rock = rock;
    });
  }

  ionViewDidLoad() {}

  irGrupo(idx) {
    this.navCtrl.push( RockPerfilPage, { "rock" : this.rock[idx] } );
  }

}
