import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
    children: [
      {
        path: 'map',
        loadComponent: () => import('./pages/map-page/map-page.component').then((m) => m.MapPageComponent),
        data: {
          title: 'Mapa'
        }
      },
      {
        path: 'events',
        loadComponent: () => import('./pages/event-page/event-page.component').then((m) => m.EventPageComponent),
        data: {
          title: 'Eventos'
        },
        children: [
          {
            path: 'event-detail',
            loadComponent: () => import('./pages/event-page/event-detail-page/event-detail-page.component').then((m) => m.EventDetailPageComponent),
            data: {
              title: 'Detalle del Evento'
            }
          }
        ]
      },
      {
        path: 'profile',
        loadComponent: () => import('./pages/profile-page/profile-page.component').then((m) => m.ProfilePageComponent),
        data: {
          title: 'Mi Perfil'
        }
      },
      {
        path: '',
        redirectTo: 'map',
        pathMatch: 'full',
      },
    ]
  },
  {
    path: 'home',
    redirectTo: 'map',
    pathMatch: 'full',
  },
];
