import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  private api: string = environment.api;
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  
  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }
  
  getAll(): Observable<any> {
    const url = this.api + '/empleado?token=' + this.authService.token;
    return this.http.get(url, {headers: this.headers}).pipe(map((resp: any) => resp.data));
  }
}
