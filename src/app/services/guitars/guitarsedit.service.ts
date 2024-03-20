import { Injectable, inject } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, getDoc, updateDoc, setDoc } from '@angular/fire/firestore';

import { Guitarmodel } from '@models/guitar'

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuitarseditService {


  private firestore: Firestore = inject(Firestore);

  constructor() { }


  addGuitar(guitar: Guitarmodel) {
    const guitarsRef = collection(this.firestore, 'guitars');
    return addDoc(guitarsRef, guitar)
  }

  addGuitarWithId(guitar: Guitarmodel, guitarId: any) {
    const guitarsRef = collection(this.firestore, 'guitars');
    return setDoc(doc(guitarsRef, guitarId), guitar)
  }

  getGuitar(): Observable<Guitarmodel[]> {
    const guitarsRef = collection(this.firestore, 'guitars');
    return collectionData(guitarsRef, { idField: 'id' }) as Observable<Guitarmodel[]>
  }

  deleteGuitar(guitar: Guitarmodel) {
    const clientDocRef = doc(this.firestore, `guitars/${guitar.guitarId}`);
    return deleteDoc(clientDocRef)
  }


  async getOneClient(clientId: string) {
    // const clientDocRef = doc(this.firestore, `clients/${clientId}`);
    const clientDocRef = doc(this.firestore, 'clients', clientId);
    console.log(clientDocRef);
    const client = (await getDoc(clientDocRef)).data();
    console.log(client);
    return client as Guitarmodel
  }

  updateOneGuitar(guitar: any, guitarId: string) {
    const guitarDocRef = doc(this.firestore, 'guitars', guitarId);
    updateDoc(guitarDocRef, guitar)
      .then(() => {
        console.log('Guitar updated');
        alert('Guitar Updated');
      })
      .catch((error) => {
        console.log(error);
      })
  }





}
