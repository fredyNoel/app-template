import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Usuario } from '../../interface/Interfaces';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styles: [
  ]
})
export class PerfilComponent implements OnInit {

  public forma: FormGroup;
  public user: Usuario;
  public isLoading: boolean;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.user = this.authService.currentUser;
    this.forma = this.fb.group({
      nombre: [this.user.nombre, Validators.required],
      apellidos: [this.user.apellidos],
      direccion: [this.user.direccion],
      telefono: [this.user.telefono],
      usuario: [this.user.usuario, Validators.required],
      email: [this.user.email],
      password: [],
      create_at: {value: this.user.createAt, disabled: true},
    });
  }

  actualizar() {
    this.isLoading = true;
    this.authService.updateProfile(this.forma.value)
    .subscribe(
      () => this.isLoading = false,
      () => this.isLoading = false
    );
  }

}
