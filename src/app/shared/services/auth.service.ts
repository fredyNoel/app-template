import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiData, Usuario } from '../../interface/Interfaces';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  private api: string = environment.api;
  public currentUser: any = {};
  public token: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.getStorage();
  }

  // REGISTRARSE
  signUp(user: Usuario): Observable<any> {
    const api = `${this.api}/register-user`;
    return this.http.post(api, user)
      .pipe(
        map((resp: Response) => {
          return resp || {}
        })
      );
  }

  updateProfile(user: Usuario): Observable<any> {
    const url = this.api + '/usuario/perfil/' + this.currentUser._id + '?token=' + this.token;
    return this.http.put(url, user)
    .pipe(
      map((resp: any) => {
        this.setStorage(resp.data, this.token);
        this.snackBar.open('Informacion actualizada!', 'Ok', {duration: 3500});
        return;
      })
    );
  }

  // INGRESAR
  signIn(user: Usuario, recuerdame: boolean = false) {
    if(recuerdame) {
      localStorage.setItem('username', user.usuario);
    } else {
      localStorage.removeItem('username');
    }
    const url = this.api + '/login';
    return this.http.post(url, user)
    .pipe(
      map((resp: any) => {
        this.setStorage(resp.usuario, resp.token);
        this.router.navigate(['/dashboard']);
        return;
      })
    );
  }

  // SALIR
  signOut() {
    const removeToken = localStorage.removeItem('access_token');
    localStorage.removeItem('current_user');
    if (removeToken == null) {
      this.router.navigate(['/login']);
    }
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    const authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  setStorage(user: Usuario, token: string) {
    localStorage.setItem('current_user', JSON.stringify(user));
    localStorage.setItem('access_token', token);
    this.currentUser = user;
    this.token = token;
  }

  getStorage() {
    if(localStorage.getItem('access_token')) {
      this.token = localStorage.getItem('access_token');
      this.currentUser = JSON.parse(localStorage.getItem('current_user'));
    } else {
      this.currentUser = null;
      this.token = null;
    }
  }

}
