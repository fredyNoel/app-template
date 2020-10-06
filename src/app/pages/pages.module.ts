import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RutasComponent } from './rutas/rutas.component';
import { DashboardComponent } from './dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PagesComponent,
    UsuariosComponent,
    ColaboradoresComponent,
    PerfilComponent,
    RutasComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
