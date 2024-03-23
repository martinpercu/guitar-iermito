import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormControl, Validators, FormGroup, ReactiveFormsModule, FormBuilder } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
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
  private router = inject(Router);

  private formBuilder = inject(FormBuilder);

  form!: FormGroup;

  guitar!: Guitarmodel;
  guitarId!: string;


  constructor() {
    this.buildForm();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      guitarId: ['', [Validators.required]],
      nameModel: ['', [Validators.required, Validators.minLength(3)]],
      widthnut: [''],
      width12thfret: [''],
      strings: [''],
      weight: [''],
      machinehead: [''],
      machineheadlink: [''],

      top: [''],
      bracing: [''],
      scale: [''],
      fingerboard: ['Ebony'],
      neck: ['Brazilian Cedar'],
      backandsides: ['Indian Rosewood'],
      bridge: [''],
      bridgeweight: [''],
      nut: ['Bone Blank'],
      varnish: ['French Polish “Astra“'],

      fr_top: [''],
      fr_bracing: [''],
      fr_fingerboard: ['Ebène'],
      fr_neck: ['Cèdre du Brésil'],
      fr_backandsides: ['Palissandre Indien'],
      fr_bridge: [''],
      fr_nut: ['Os naturel'],
      fr_varnish: ['Gomme laque “Astra“ au tampon'],

      es_top: [''],
      es_bracing: [''],
      es_fingerboard: ['Ébano'],
      es_neck: ['Cedro de Brasil'],
      es_backandsides: ['Palosanto de Indias'],
      es_bridge: [''],
      es_nut: ['Hueso natural'],
      es_varnish: ['Goma laca “Astra“ a muñequilla'],
    });
  }


  async onSubmit() {
    const response = await this.guitarService.addGuitarWithId(this.form.value, this.form.value.guitarId);
    // console.log(response);
    console.log(this.form.value);
    // this.navToJoined();
    // const form = this.formJoinMail.value;
    // this.emailsender.sendEmail(this.formJoinMail.value);
    // this.sendEmail()
  }


  // saveClient(event: Event) {
  //   if (this.form.valid) {
  //   console.log(this.form.value);
  //   this.guitarService.updateOneClient(this.form.value, this.guitarId);
  //   this.router.navigate(['admin'])
  //   } else {
  //     this.form.markAllAsTouched();
  //   }
  // }

  // get fullnameField() {
  //   return this.form.get('fullname')
  // }
  // get firstnameField() {
  //   return this.form.get('firstname')
  // }
  // get lastnameField() {
  //   return this.form.get('lastname')
  // }
  // get emailField() {
  //   return this.form.get('email')
  // }
  // get phoneField() {
  //   return this.form.get('phone')
  // }
  // get byEmailField() {
  //   return this.form.get('byEmail')
  // }
  // get byPhoneField() {
  //   return this.form.get('byPhone')
  // }
  // get addressField() {
  //   return this.form.get('address')
  // }
  // get zipCodeField() {
  //   return this.form.get('zipCode')
  // }
  // get adultField() {
  //   return this.form.get('adult')
  // }
  // get agreeField() {
  //   return this.form.get('agree')
  // }

  // // FIRST name
  // get isfirstnameFieldValid() {
  //   return this.firstnameField!.touched && this.firstnameField!.valid
  // }
  // get isfirstnameFieldInvalid() {
  //   return this.firstnameField!.touched && this.firstnameField!.invalid
  // }
  // // LAST name
  // get islastnameFieldValid() {
  //   return this.lastnameField!.touched && this.lastnameField!.valid
  // }
  // get islastnameFieldInvalid() {
  //   return this.lastnameField!.touched && this.lastnameField!.invalid
  // }
  // // FULLNAME
  // get isfullnameFieldValid() {
  //   return this.fullnameField!.touched && this.fullnameField!.valid
  // }
  // get isfullnameFieldInvalid() {
  //   return this.fullnameField!.touched && this.fullnameField!.invalid
  // }


}
