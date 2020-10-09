import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { UsuarioModalComponent } from './components/modals/usuario/usuario-modal.component';
import { ColaboradorModalComponent } from './components/modals/colaborador/colaborador-modal.component';

@NgModule({
  declarations: [
    SidenavComponent,
    UsuarioModalComponent,
    ColaboradorModalComponent
  ],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [SidenavComponent]
})
export class SharedModule { }
