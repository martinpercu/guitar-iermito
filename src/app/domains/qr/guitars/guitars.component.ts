import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'

import { Router, ActivatedRoute } from '@angular/router';
import { GuitarseditService } from '@services/guitars/guitarsedit.service'

import { Guitarmodel } from '@models/guitar'

import { SpinnerComponent } from '@shared/spinner/spinner.component'

@Component({
  selector: 'app-guitars',
  standalone: true,
  imports: [CommonModule, SpinnerComponent],
  templateUrl: './guitars.component.html',
  styleUrl: './guitars.component.css'
})
export class GuitarsComponent {

  private guitarService = inject(GuitarseditService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute)


  guitar!: Guitarmodel;
  guitarId!: string;

  langSelect!: string;


  constructor() {
    const id = String(this.activatedRoute.snapshot.paramMap.get('id'));
    if (id) {
      this.guitarId = id.slice(0, 5); // we need only the 5 first character because old implement QR with "xxxxx.html"
      this.getGuitar()
    }
    this.langSelect = "fr"
  }



  async getGuitar() {
    const guitarGetted = await this.guitarService.getOneGuitar(this.guitarId);
    this.guitar = guitarGetted
    console.log(this.guitar);
    // this.buildForm();
  }


  changeSelector(lang:string) {
    this.langSelect = lang
  }


}
