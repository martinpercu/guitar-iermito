import { Component, inject } from '@angular/core';

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';


@Component({
  selector: 'app-logoutbutton',
  standalone: true,
  imports: [],
  templateUrl: './logoutbutton.component.html',
  styleUrl: './logoutbutton.component.css'
})
export class LogoutbuttonComponent {

  private authService = inject(AuthService);
  private router = inject(Router);

  logout() {
    this.authService.logout();
    this.router.navigate(['admin'])
  }

}
