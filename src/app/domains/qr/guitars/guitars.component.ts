import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormControl, Validators, FormGroup, ReactiveFormsModule, FormBuilder } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import { GuitarseditService } from '@services/guitars/guitarsedit.service'

import { Guitarmodel } from '@models/guitar'

@Component({
  selector: 'app-guitars',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './guitars.component.html',
  styleUrl: './guitars.component.css'
})
export class GuitarsComponent {

  private guitarService = inject(GuitarseditService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute)


  guitar!: Guitarmodel;
  guitarId!: string;


  constructor() {
    const id = String(this.activatedRoute.snapshot.paramMap.get('id'));
    if (id) {
      this.guitarId = id.slice(0, 5); // we need only the 5 first character because old implement QR with "xxxxx.html"
      // console.log('the guitarID', this.guitarId);
      // console.log(typeof(id));
      // this.guitarId = id.slice(5, 0);
      // console.log(id.slice(0, 5));

      // console.log('hay parametro this.guitarID', this.guitarId);


      this.getGuitar()
    }
  }


  async getGuitar() {
    const guitarGetted = await this.guitarService.getOneGuitar(this.guitarId);
    this.guitar = guitarGetted
    console.log(this.guitar);
    // this.buildForm();
  }


}
