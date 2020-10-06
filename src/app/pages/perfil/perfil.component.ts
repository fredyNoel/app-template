import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../../services/services.index';
import { Usuario } from '../../interface/Interfaces';

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
    private _usuarioService: UsuariosService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.user = this._usuarioService.usuario;
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
    this._usuarioService.update(this.forma.value)
    .subscribe(
      () => this.isLoading = false,
      () => this.isLoading = false
    );
  }

}
