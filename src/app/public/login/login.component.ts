import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsuariosService } from '../../services/services.index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  public hide = true;
  public isLoading: boolean;
  public forma: FormGroup;
  public recuerdame: boolean = false;
  public user: string;

  constructor(
    private fb: FormBuilder,
    private snack: MatSnackBar,
    private _usuarioService: UsuariosService
  ) {}

  ngOnInit(): void {
    this.user = localStorage.getItem('username') || null;
    if(this.user !== null) {
      this.recuerdame = true;
    }
    this.forma = this.fb.group({
      usuario: [this.user, Validators.required],
      password: ['', Validators.required],
      recuerdame: this.recuerdame
    });
  }

  ingresar() {
    if(this.forma.invalid) {
      return this.snack.open('Favor de llenar los campos', 'Ok', {duration: 3000});
    }
    this.isLoading = true;
    const user = this.forma.value;
    this._usuarioService.login(user, user.recuerdame)
    .subscribe(
      () => this.isLoading = false,
      () => this.isLoading = false
    );
  }

}
