import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'admin/termine',
    loadComponent: () =>
      import('./pages/admin/admin.page').then(m => m.AdminPageComponent)
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
