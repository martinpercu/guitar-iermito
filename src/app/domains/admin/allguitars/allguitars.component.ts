import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormControl, Validators, FormGroup, ReactiveFormsModule, FormBuilder } from '@angular/forms';

import { Router, ActivatedRoute, RouterLinkWithHref } from '@angular/router';
import { GuitarseditService } from '@services/guitars/guitarsedit.service';

import { Guitarmodel } from '@models/guitar';
import { LogoutbuttonComponent } from '@admin/logoutbutton/logoutbutton.component';
import { NewguitarbuttonComponent } from '@admin/newguitarbutton/newguitarbutton.component';

@Component({
  selector: 'app-allguitars',
  standalone: true,
  imports: [LogoutbuttonComponent, NewguitarbuttonComponent, ReactiveFormsModule, RouterLinkWithHref],
  templateUrl: './allguitars.component.html',
  styleUrl: './allguitars.component.css'
})
export class AllguitarsComponent {

  private guitarService = inject(GuitarseditService);
  private router = inject(Router);

  guitars!: Guitarmodel[];

  ngOnInit() {
    this.guitarService.getGuitars().subscribe(guitars => {
      this.guitars = guitars;
      console.log(this.guitars);

    })
  }

  navEditGuitar(guitarId: string) {
    // this.expand = !this.expand
    this.router.navigate(['edit', guitarId])
  }

  navSeeGuitar(guitarId: string) {
    // this.expand = !this.expand
    this.router.navigate([guitarId])
  }

}
