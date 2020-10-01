import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrarRoutingModule } from './administrar-routing.module';
import { AdministrarComponent } from './administrar.component';
import { SharedModule } from '../../shared/shared.module';

import { UsuariosComponent } from './usuarios/usuarios.component';
import { ColaboladoresComponent } from './colaboladores/colaboladores.component';
import { RutasComponent } from './rutas/rutas.component';


@NgModule({
  declarations: [AdministrarComponent, UsuariosComponent, ColaboladoresComponent, RutasComponent],
  imports: [
    CommonModule,
    AdministrarRoutingModule,
    SharedModule
  ]
})
export class AdministrarModule { }
