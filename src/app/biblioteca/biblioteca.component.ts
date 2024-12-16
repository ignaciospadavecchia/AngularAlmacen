import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-biblioteca',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Bibliotecas Inteligentes de Pamplona</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
         <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
          <li class="nav-item">
              <a class="nav-link" routerLink="mapa" routerLinkActive="active">Mapa</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="categorias" routerLinkActive="active">Categorías</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="productos" routerLinkActive="active">Productos</a>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
    <div class="container-fluid mt-3">
      <router-outlet/>
    </div>
  `,
  styles: [`
    .navbar-nav .nav-link.active {
      font-weight: bold;
      text-decoration: underline;
    }
  `]
})
export class BibliotecaComponent {
}
