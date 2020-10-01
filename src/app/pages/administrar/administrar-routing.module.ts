import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrarComponent } from './administrar.component';
import { ColaboladoresComponent } from './colaboladores/colaboladores.component';
import { RutasComponent } from './rutas/rutas.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {
    path: '',
    component: AdministrarComponent,
    children: [
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'colaboladores', component: ColaboladoresComponent },
      { path: 'rutas', component: RutasComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrarRoutingModule { }
