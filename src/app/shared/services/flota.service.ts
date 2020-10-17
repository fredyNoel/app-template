import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Flota, ApiData } from '../../interface/Interfaces';
import { environment } from '../../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FlotaService {
  
  private api: string = environment.api;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  addElement(flota: Flota): Observable<Flota> {
    const url = this.api + '/flota?token=' + this.authService.token;
    return this.http.post(url, flota).pipe(map((resp: ApiData) => resp.data));
  }

  getAll(): Observable<Flota[]> {
    const url = this.api + '/flota?token=' + this.authService.token;
    return this.http.get(url).pipe(map((resp: ApiData) => resp.data));
  }

  updateElement(flota: Flota): Observable<Flota> {
    const url = this.api + '/flota/' + flota._id + '?token=' + this.authService.token;
    return this.http.put(url, flota).pipe(map((resp: ApiData) => resp.data));
  }
}
