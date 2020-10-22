import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { MaterialModule } from '../material/material.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RutasComponent } from './rutas/rutas.component';
import { FlotaComponent } from './flota/flota.component';

import { EmbarqueComponent } from './bitacora/embarque/embarque.component';


@NgModule({
  declarations: [
    PagesComponent,
    UsuariosComponent,
    ColaboradoresComponent,
    PerfilComponent,
    RutasComponent,
    FlotaComponent,
    EmbarqueComponent
  ],
  imports: [
    CommonModule,
    SweetAlert2Module.forRoot(),
    ReactiveFormsModule,
    PagesRoutingModule,
    SharedModule,
    MaterialModule,
  ]
})
export class PagesModule { }
