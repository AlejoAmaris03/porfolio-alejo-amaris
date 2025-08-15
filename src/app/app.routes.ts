import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./layouts/public-layout/public-layout'),
        children: [
            {
                path: 'home',
                loadComponent: () => import('./features/public/pages/home/home')
            },
            {
                path: 'projects',
                loadComponent: () => import('./features/public/pages/projects/projects')
            },
            {
                path: 'about',
                loadComponent: () => import('./features/public/pages/about/about')
            },
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            }
        ],
    }, 
    {
        path: "**",
        pathMatch: 'full',
        redirectTo: ''
    }
];
