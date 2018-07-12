import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { RockModalAlbumPage } from '../index.pages';

@IonicPage()
@Component({
  selector: 'page-rock-perfil',
  templateUrl: 'rock-perfil.html',
})
export class RockPerfilPage {

  rock:any[] = [];
  integrantes:any[] = [];
  generos:any[] = [];
  galerias:any[] = [];
  album1:any[] = [];
  album2:any[] = [];
  album3:any[] = [];
  album4:any[] = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public modalCtrl:ModalController) {

    this.rock = this.navParams.get('rock');
    this.integrantes = this.rock['integrantes']
    this.generos = this.rock['generos'];
    this.galerias = this.rock['galeria'];

    this.album1 = this.rock['album']['a1'];
    this.album2 = this.rock['album']['a2'];
    this.album3 = this.rock['album']['a3'];
    this.album4 = this.rock['album']['a4'];
    

  }

  ionViewDidLoad() {}

  irAlbum1(){
    this.modalCtrl.create( RockModalAlbumPage, { "album" : this.album1 } ).present();
  }

  irAlbum2(){
    this.modalCtrl.create( RockModalAlbumPage, { "album" : this.album2 } ).present();
  }

  irAlbum3(){
    this.modalCtrl.create( RockModalAlbumPage, { "album" : this.album3 } ).present();
  }

  irAlbum4(){
    this.modalCtrl.create( RockModalAlbumPage, { "album" : this.album4 } ).present();
  }

}
