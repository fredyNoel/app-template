import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RutasComponent } from './rutas/rutas.component';
import { ColaboladoresComponent } from './colaboladores/colaboladores.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'usuario', component: UsuariosComponent },
      { path: 'colaboladores', component: ColaboladoresComponent },
      { path: 'rutas', component: RutasComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
