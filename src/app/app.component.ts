import { Component } from "@angular/core";

@Component({
selector: 'pm-root',
template:`
<nav class='navbar navbar-expand navbar-light bg-light'>
        <th>
        <a class='navbar-brand'>
          {{tituloPagina}}
        </a>
        </th>        
        <ul class='nav nav-pills'>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/welcome'>Página de Bienvenida</a></li>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/products'>Lista de Productos</a></li>
          <li><a class='nav-link' routerLinkActive='active' href='http://localhost:59470/PG/Home1.aspx'>Ajax Controles</a></li>
        </ul>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
`
})
export class AppComponent{
  tituloPagina: string = 'Tiendita la U'
}
