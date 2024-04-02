import { Component, inject } from '@angular/core';

import { Router } from '@angular/router';



@Component({
  selector: 'app-allguitarsbutton',
  standalone: true,
  imports: [],
  templateUrl: './allguitarsbutton.component.html',
  styleUrl: './allguitarsbutton.component.css'
})
export class AllguitarsbuttonComponent {

  private router = inject(Router);

  toAllGuitars() {
    this.router.navigate(['allguitars'])
  }

}
