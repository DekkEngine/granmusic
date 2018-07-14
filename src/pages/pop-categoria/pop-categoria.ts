import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { PopPerfilPage } from '../pop-perfil/pop-perfil';

@IonicPage()
@Component({
  selector: 'page-pop-categoria',
  templateUrl: 'pop-categoria.html',
})
export class PopCategoriaPage {

  pop:any[] = [];

  constructor(public navCtrl: NavController, 
              private _fs:FirebaseProvider,
              public navParams: NavParams) {

    _fs.getPop().subscribe( pop => {
      this.pop = pop;
    });
  }

  ionViewDidLoad() {}

  irGrupo(idx){
    this.navCtrl.push( PopPerfilPage, { "pop" : this.pop[idx] } );
  }

}
