import { Component, inject } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-newguitarbutton',
  standalone: true,
  imports: [],
  templateUrl: './newguitarbutton.component.html',
  styleUrl: './newguitarbutton.component.css'
})
export class NewguitarbuttonComponent {

  private router = inject(Router);

  newGuitar() {
    this.router.navigate(['new'])
  }


}
