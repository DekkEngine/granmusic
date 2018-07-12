import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { RockCategoriaPage } from "../index.pages";
import { PopCategoriaPage } from '../pop-categoria/pop-categoria';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  rock:any;

  constructor(public navCtrl: NavController,
              private _fs:FirebaseProvider) {

    _fs.getRock().subscribe(rock =>{
      this.rock = rock;
    });
  }

  irRock(){
    this.navCtrl.push( RockCategoriaPage );
  }

  irPop(){
    this.navCtrl.push( PopCategoriaPage );
  }

}
