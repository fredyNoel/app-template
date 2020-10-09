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

  getAll(): Observable<any> {
    const url = this.api + '/usuario?token=' + this.authUser.token;
    return this.http.get(url, {headers: this.headers}).pipe(map((resp: any) => resp.data));
  }
  update(user: Usuario): Observable<any> {
    return;
  }
}
