import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Usuario } from '../../interface/Interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  public usuario: Usuario;
  public token: string;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.cargarStorage();
  }

  login(usuario: Usuario, recuerdame: Boolean = false): Observable<any> {
    if(recuerdame) {
      localStorage.setItem('username', usuario.usuario);
    } else {
      localStorage.removeItem('username');
    }
    const url = environment.api + '/login';
    return this.http.post(url, usuario)
    .pipe(
      map((resp: any) => {
        delete resp.usuario.role;
        delete resp.usuario.password;
        this.crearStorage(resp.usuario, resp.token);
        return resp.usuario;
      }),
      catchError((err: HttpErrorResponse) => {this.logout(); return throwError(err.error.mensaje);})
    );
  }
  verificaLogin() {
    return this.token !== null ? true : false;
  }
  logout() {
    this.usuario = null;
    this.token = null;

    localStorage.removeItem('usuario');
    localStorage.removeItem('token');

    this.router.navigate(['/login']);
    return true;
  }

  create(usuario: Usuario) {
    const url = environment.api + '/usuario';
    return this.http.post(url, usuario)
    .pipe(
      map((resp: any) => {
        return resp;
      }),
      catchError((err: HttpErrorResponse) => {return throwError(err.error.mensaje)})
    );
  }
  read(): Observable<any> {
    const url = environment.api + '/usuario' + '?token=' + this.token;
    return this.http.get(url).pipe(
      map((resp: any) => {
        const usuario = resp.data;
        const data = [];
        usuario.forEach(e => {
          data.push({
            'id': e._id,
            'nombre': e.nombre,
            'username': e.usuario,
            'role': e.role,
            'email': e.email
          });
        });
        return data;
      })
    );
  }

  update() {}
  delete() {}

  crearStorage(usuario: Usuario, token: string) {
    localStorage.setItem('usuario', JSON.stringify(usuario));
    localStorage.setItem('token', token);
    this.usuario = usuario;
    this.token = token;
  }
  cargarStorage() {
    if(localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    } else {
      this.token = null;
      this.usuario = null;
    }
  }
}
