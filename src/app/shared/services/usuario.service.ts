import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Usuario } from '../../interface/Interfaces';
import { environment } from '../../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private api: string = environment.api;
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  
  constructor(
    private http: HttpClient,
    private authUser: AuthService
  ) { }

  getAll(): Observable<Usuario[]> {
    const url = this.api + '/usuario?token=' + this.authUser.token;
    return this.http.get(url, {headers: this.headers}).pipe(map((resp: any) => resp.data));
  }
  addElement(user: Usuario): Observable<any> {
    return;
  }
  updateElement(usuario: Usuario): Observable<Usuario> {
    const url = this.api + '/usuario/' + usuario._id + '?token=' + this.authUser.token;
    return this.http.put(url, usuario, {headers: this.headers}).pipe(map((resp: any) => resp.data));
  }
}
