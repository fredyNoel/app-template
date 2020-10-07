import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RutasComponent } from './rutas/rutas.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'colaboradores', component: ColaboradoresComponent },
      { path: 'rutas', component: RutasComponent },
      { path: 'perfil', component: PerfilComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
