import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ColaboladoresComponent } from './colaboladores/colaboladores.component';
import { RutasComponent } from './rutas/rutas.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [PagesComponent, UsuariosComponent, ColaboladoresComponent, RutasComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class PagesModule { }
