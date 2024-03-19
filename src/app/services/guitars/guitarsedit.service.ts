import { Injectable, inject } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, getDoc, updateDoc } from '@angular/fire/firestore';

import { Guitarmodel } from '@models/guitar'

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuitarseditService {


  private firestore: Firestore = inject(Firestore);

  constructor() { }


  addGuitar(client: Guitarmodel) {
    const guitarsRef = collection(this.firestore, 'guitars');
    return addDoc(guitarsRef, client)
  }

  getGuitar(): Observable<Guitarmodel[]> {
    const guitarsRef = collection(this.firestore, 'guitars');
    return collectionData(guitarsRef, { idField: 'id' }) as Observable<Guitarmodel[]>
  }

  deleteGuitar(guitar: Guitarmodel) {
    const clientDocRef = doc(this.firestore, `guitars/${guitar.id}`);
    return deleteDoc(clientDocRef)
  }
}
