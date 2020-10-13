import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from './auth.service';
import { ApiData, Ruta } from '../../interface/Interfaces';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RutaService {

  private api: string = environment.api;
  
  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  addElement(ruta: Ruta): Observable<Ruta> {
    const url = this.api + '/ruta?token=' + this.authService.token;
    return this.http.post(url, ruta).pipe(map((resp: ApiData) => resp.data));
  }

  getAll(): Observable<Ruta> {
    const url = this.api + '/ruta?token=' + this.authService.token;
    return this.http.get(url).pipe(map((resp: ApiData) => resp.data));
  }

  updateElement(ruta: Ruta): Observable<Ruta> {
    const url = this.api + '/ruta/' + ruta._id + '?token=' + this.authService.token;
    return this.http.put(url, ruta).pipe(map((resp: ApiData) => resp.data));
  }


}
