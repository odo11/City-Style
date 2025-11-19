import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'datenschutzundimpressum',
    loadComponent: () => import('./pages/legal/legal.component').then(m => m.LegalComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
