import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from '../../shared/services/auth.service';

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
    private auth: AuthService
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
      return this.snack.open('Favor de llenar los campos', 'Ok');
    }
    this.isLoading = true;
    const user = this.forma.value;
    this.auth.signIn(user, user.recuerdame)
    .subscribe(
      () => this.isLoading = false,
      () => this.isLoading = false
    );
  }

}
