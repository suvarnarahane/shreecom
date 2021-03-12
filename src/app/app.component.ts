import { Component } from '@angular/core';
import { map } from 'rxjs/operators';

import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shreecom';
  constructor(private firestore: AngularFirestore) { }
}
