import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirebaseProvider {

  rock: Observable<any[]>;
  pop: Observable<any[]>;

  constructor(private  afDB: AngularFireDatabase) {
    this.getRock();
    this.getPop();
  }

  getRock(){
    return this.rock = this.afDB.list('rock').valueChanges();
  }

  getPop() {
    return this.pop = this.afDB.list('pop').valueChanges();
  }

}
