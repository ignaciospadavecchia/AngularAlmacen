import { Routes } from '@angular/router';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { LoginComponent } from './inicio/login/login.component';
import { NotFoundComponent } from './inicio/not-found/not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
      path: 'biblioteca',
      component: BibliotecaComponent,
      children: [
        { path: '', redirectTo: '/biblioteca/categorias', pathMatch: 'full' },
        {
          path: 'mapa',
          loadComponent: () => import('./biblioteca/mapa/mapa.component').then(m => m.MapaComponent)
        },
        {
          path: 'categorias',
          loadComponent: () => import('./biblioteca/categorias/categorias.component').then((c) => c.CategoriasComponent)
        },
        {
          path: 'productos',
          loadComponent: () => import('./biblioteca/productos/productos.component').then((c) => c.ProductosComponent)
        }
      ]
    },
    { path: '**', component: NotFoundComponent }
  ];
