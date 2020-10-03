import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RutasComponent } from './rutas/rutas.component';
import { MaterialModule } from '../material/material.module';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [PagesComponent, UsuariosComponent, ColaboradoresComponent, PerfilComponent, RutasComponent, DashboardComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class PagesModule { }
