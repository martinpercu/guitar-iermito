import { Routes } from '@angular/router';

import { GuitarsComponent } from '@qr/guitars/guitars.component';
import { NewguitarComponent } from '@admin/newguitar/newguitar.component';


export const routes: Routes = [
  {
    path: 'html',
    component: GuitarsComponent
  },
  {
    path: ':id',
    component: GuitarsComponent
  },
  {
    path: 'new',
    component: NewguitarComponent
  }
];
