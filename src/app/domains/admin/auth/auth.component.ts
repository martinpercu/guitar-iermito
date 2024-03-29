import { Component, inject } from '@angular/core';

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  private authService = inject(AuthService);
  private router = inject(Router);

  formLogin: FormGroup;

  constructor() {

    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }


  onSubmit() {
    this.authService.login(this.formLogin.value)
      .then(response => {
        console.log(response);
        this.router.navigate(['allguitars']);
        // this.navToDash();
      })
      .catch(error => console.log(error));
  }

}
