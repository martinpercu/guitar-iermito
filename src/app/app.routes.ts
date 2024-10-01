import { Routes } from '@angular/router';

// import { GuitarsComponent } from '@qr/guitars/guitars.component';
import { NewguitarComponent } from '@admin/newguitar/newguitar.component';
import { SpinnerComponent } from '@shared/spinner/spinner.component';


export const routes: Routes = [
  {
    path: 'new',
    component: NewguitarComponent
    // loadComponent: () => import('@admin/newguitar/newguitar.component').then(m => m.NewguitarComponent)
  },
  {
    path: 'spinner',
    component: SpinnerComponent
  },
  {
    path: ':id',
    // component: GuitarsComponent
    loadComponent: () => import('@qr/guitars/guitars.component').then(m => m.GuitarsComponent)
  },
];
