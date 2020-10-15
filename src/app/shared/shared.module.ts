import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { UsuarioModalComponent } from './components/modals/usuario/usuario-modal.component';
import { ColaboradorModalComponent } from './components/modals/colaborador/colaborador-modal.component';
import { RutaModalComponent } from './components/modals/ruta/ruta-modal.component';
import { FlotaModalComponent } from './components/modals/flota/flota-modal.component';

@NgModule({
  declarations: [
    SidenavComponent,
    UsuarioModalComponent,
    ColaboradorModalComponent,
    RutaModalComponent,
    FlotaModalComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [SidenavComponent]
})
export class SharedModule { }
