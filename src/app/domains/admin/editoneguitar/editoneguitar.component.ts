import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'

import { FormControl, Validators, FormGroup, ReactiveFormsModule, FormBuilder } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import { GuitarseditService } from '@services/guitars/guitarsedit.service';

import { Guitarmodel } from '@models/guitar';

import { SpinnerComponent } from '@shared/spinner/spinner.component';
import { LogoutbuttonComponent } from '@admin/logoutbutton/logoutbutton.component';
import { AllguitarsbuttonComponent } from '@admin/allguitarsbutton/allguitarsbutton.component';



@Component({
  selector: 'app-editoneguitar',
  standalone: true,
  imports: [LogoutbuttonComponent, AllguitarsbuttonComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './editoneguitar.component.html',
  styleUrl: './editoneguitar.component.css'
})
export class EditoneguitarComponent {

  private guitarService = inject(GuitarseditService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);


  private formBuilder = inject(FormBuilder);

  form!: FormGroup;

  guitar!: Guitarmodel;
  guitarId!: string;




  constructor() {
    const id = String(this.activatedRoute.snapshot.paramMap.get('id'));
    if (id) {
      this.guitarId = id.slice(0, 5); // we need only the 5 first character because old implement QR with "xxxxx.html"
      this.getGuitar()
    }
  }



  async getGuitar() {
    const guitarGetted = await this.guitarService.getOneGuitar(this.guitarId);
    this.guitar = guitarGetted
    console.log(this.guitar);
    this.buildForm();
  }


  private buildForm() {
    this.form = this.formBuilder.group({
      guitarId: [this.guitar.guitarId],
      nameModel: [this.guitar.nameModel, [Validators.required, Validators.minLength(3)]],
      widthnut: [this.guitar.widthnut],
      width12thfret: [this.guitar.width12thfret],
      strings: [this.guitar.strings],
      weight: [this.guitar.weight],
      machinehead: [this.guitar.machinehead],
      machineheadlink: [this.guitar.machineheadlink],

      top: [this.guitar.top],
      bracing: [this.guitar.bracing],
      scale: [this.guitar.scale],
      fingerboard: [this.guitar.fingerboard],
      neck: [this.guitar.neck],
      backandsides: [this.guitar.backandsides],
      bridge: [this.guitar.bridge],
      bridgeweight: [this.guitar.bridgeweight],
      nut: [this.guitar.nut],
      varnish: [this.guitar.varnish],

      fr_top: [this.guitar.fr_top],
      fr_bracing: [this.guitar.fr_bracing],
      fr_fingerboard: [this.guitar.fr_fingerboard],
      fr_neck: [this.guitar.fr_neck],
      fr_backandsides: [this.guitar.fr_backandsides],
      fr_bridge: [this.guitar.fr_bridge],
      fr_nut: [this.guitar.fr_nut],
      fr_varnish: [this.guitar.fr_varnish],

      es_top: [this.guitar.es_top],
      es_bracing: [this.guitar.es_bracing],
      es_fingerboard: [this.guitar.es_fingerboard],
      es_neck: [this.guitar.es_neck],
      es_backandsides: [this.guitar.es_backandsides],
      es_bridge: [this.guitar.es_bridge],
      es_nut: [this.guitar.es_nut],
      es_varnish: [this.guitar.es_varnish],
    });
  }

  onSubmit() {
    this.guitarService.addGuitarWithId(this.form.value, this.form.value.guitarId);
    // console.log(response);
    // console.log(this.form.value);
  }

  deleteThisGuitar() {
    if (confirm(`Queres BORRAR la guitarra ${this.form.value.guitarId}?? \nOJO que no hay marcha atrás!!!`) == true) {
      if (prompt("La contraseña para borrar: \n \n Pepe argento Rompé", "rompe...pepe") == 'rompepepe') {
        this.guitarService.deleteGuitar(this.form.value)
      }
    }
  }

  a() {
    // let pass = prompt("La contraseña", "rompe...");
    if (prompt("La contraseña para borrar:", "rompe...pepe") == 'rompepepe') {
      this.guitarService.deleteGuitar(this.form.value)
    }
  }



}
