import { Routes } from '@angular/router';

// import { GuitarsComponent } from '@qr/guitars/guitars.component';
import { NewguitarComponent } from '@admin/newguitar/newguitar.component';
import { AllguitarsComponent } from '@admin/allguitars/allguitars.component';
import { EditoneguitarComponent } from '@admin/editoneguitar/editoneguitar.component';
import { SpinnerComponent } from '@shared/spinner/spinner.component';
import { AuthComponent } from '@admin/auth/auth.component';

import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard'


export const routes: Routes = [
  {
    path: 'admin',
    component: AuthComponent
  },
  {
    path: 'new',
    component: NewguitarComponent,
    ...canActivate(() => redirectUnauthorizedTo(['admin']))
    // loadComponent: () => import('@admin/newguitar/newguitar.component').then(m => m.NewguitarComponent)
  },
  {
    path: 'edit/:id',
    component: EditoneguitarComponent,
    ...canActivate(() => redirectUnauthorizedTo(['admin']))
    // loadComponent: () => import('@admin/newguitar/newguitar.component').then(m => m.NewguitarComponent)
  },
  {
    path: 'allguitars',
    component: AllguitarsComponent,
    ...canActivate(() => redirectUnauthorizedTo(['admin']))
    // loadComponent: () => import('@admin/newguitar/newguitar.component').then(m => m.NewguitarComponent)
  },
  {
    path: 'allguitars/:id',
    // component: GuitarsComponent
    loadComponent: () => import('@qr/guitars/guitars.component').then(m => m.GuitarsComponent)
  },
  // {
  //   path: 'spinner',
  //   component: SpinnerComponent
  // },
  {
    path: ':id',
    // component: GuitarsComponent
    loadComponent: () => import('@qr/guitars/guitars.component').then(m => m.GuitarsComponent)
  },
];
