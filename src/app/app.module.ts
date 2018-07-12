import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { HomePage, 
         RockCategoriaPage, 
         PopCategoriaPage, 
         RockPerfilPage, 
         RockModalAlbumPage } from "../pages/index.pages";

//firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FirebaseProvider } from '../providers/firebase/firebase';

export const firebaseConfig = {
  apiKey: "AIzaSyCteRlcNjBAVIj2w-FTCkjmjsE_ip9_YVY",
  authDomain: "rockapp-7bd90.firebaseapp.com",
  databaseURL: "https://rockapp-7bd90.firebaseio.com",
  projectId: "rockapp-7bd90",
  storageBucket: "rockapp-7bd90.appspot.com",
  messagingSenderId: "9831832976"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RockCategoriaPage,
    PopCategoriaPage,
    RockPerfilPage,
    RockModalAlbumPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      pageTransition: 'ios-transition'
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RockCategoriaPage,
    PopCategoriaPage,
    RockPerfilPage,
    RockModalAlbumPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider
  ]
})
export class AppModule {}
