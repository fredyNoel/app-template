import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../interface/Interfaces';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private api: string = environment.api;
  // headers = new HttpHeaders().set('Content-Type', 'application/json');
  
  constructor(
    private http: HttpClient,
    private authUser: AuthService
  ) { }

  update(user: Usuario): Observable<any> {
    return;
  }
}
