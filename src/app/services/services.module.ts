import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  LoginGuard,
  UsuariosService,
} from './services.index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    LoginGuard,
    UsuariosService
  ]
})
export class ServicesModule { }
