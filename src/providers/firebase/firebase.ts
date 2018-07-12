import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirebaseProvider {

  rock: Observable<any[]>;

  constructor(private  afDB: AngularFireDatabase) {
    this.getRock();
  }

  getRock(){
    return this.rock = this.afDB.list('rock').valueChanges();
  }

}
