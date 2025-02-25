import { Injectable, inject } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, getDoc, updateDoc, setDoc } from '@angular/fire/firestore';

import { Guitarmodel } from '@models/guitar'

import { Observable } from 'rxjs';

import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuitarseditService {


  private firestore: Firestore = inject(Firestore);

  private router = inject(Router);

  constructor() { }


  addGuitar(guitar: Guitarmodel) {
    const guitarsRef = collection(this.firestore, 'guitars');
    return addDoc(guitarsRef, guitar)
  }

  addGuitarWithId(guitar: Guitarmodel, guitarId: any) {
    const guitarsRef = collection(this.firestore, 'guitars');
    this.router.navigate(['allguitars'])
    return setDoc(doc(guitarsRef, guitarId), guitar)
  }

  getGuitars(): Observable<Guitarmodel[]> {
    const guitarsRef = collection(this.firestore, 'guitars');
    return collectionData(guitarsRef, { idField: 'id' }) as Observable<Guitarmodel[]>
  }

  deleteGuitar(guitar: Guitarmodel) {
    const clientDocRef = doc(this.firestore, `guitars/${guitar.guitarId}`);
    this.router.navigate(['allguitars'])
    return deleteDoc(clientDocRef)
  }


  async getOneGuitar(guitarId: string) {
    // const clientDocRef = doc(this.firestore, `clients/${clientId}`);
    const guitarDocRef = doc(this.firestore, 'guitars', guitarId);
    console.log(guitarDocRef);
    const client = (await getDoc(guitarDocRef)).data();
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
