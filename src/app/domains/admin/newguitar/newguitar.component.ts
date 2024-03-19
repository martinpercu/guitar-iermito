import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormControl, Validators, FormGroup, ReactiveFormsModule, FormBuilder } from '@angular/forms';

import { GuitarseditService } from '@services/guitars/guitarsedit.service'

import { Guitarmodel } from '@models/guitar'

@Component({
  selector: 'app-newguitar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './newguitar.component.html',
  styleUrl: './newguitar.component.css'
})
export class NewguitarComponent {

  private guitarService = inject(GuitarseditService);


  private formBuilder = inject(FormBuilder);


  form!: FormGroup;

  guitar!: Guitarmodel;
  guitarId!: string;

}
