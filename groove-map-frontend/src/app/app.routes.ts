import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
    children: [
        {
            path: 'map',
            loadComponent: () => import('./pages/map-page/map-page.component').then((m) => m.MapPageComponent)
        }
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
