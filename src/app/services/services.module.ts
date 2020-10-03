import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {
  LoginGuard,
  UsuariosService,
} from './services.index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // HttpClientModule
  ],
  providers: [
    LoginGuard,
    UsuariosService
  ]
})
export class ServicesModule { }
