import { Routes } from '@angular/router';

import { GuitarsComponent } from '@qr/guitars/guitars.component';
import { NewguitarComponent } from '@admin/newguitar/newguitar.component';


export const routes: Routes = [
  {
    path: '',
    component: GuitarsComponent
  },
  {
    path: 'new',
    component: NewguitarComponent
  }
];
