import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pop-perfil',
  templateUrl: 'pop-perfil.html',
})
export class PopPerfilPage {

  pop:any[] = [];
  galerias:any[] = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {
    this.pop = this.navParams.get('pop');
    this.galerias = this.pop['galeria'];
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopPerfilPage');
  }

}
