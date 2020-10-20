import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiData, Embarque } from 'src/app/interface/Interfaces';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class EmbarqueService {
  private api: string = environment.api;
  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }
  addElement(embarque: Embarque): Observable<Embarque> {
    const url = this.api + '/embarque?token=' + this.authService.token;
    return this.http.post(url, embarque).pipe(map((resp: ApiData) => resp.data));
  }
  getAll(): Observable<Embarque[]> {
    const url = this.api + '/embarque?token=' + this.authService.token;
    return this.http.get(url).pipe(map((resp: ApiData) => resp.data));
  }
  updateElement(embarque: Embarque): Observable<Embarque> {
    const url = this.api + '/embarque/' + embarque._id + '?token=' + this.authService.token;
    return this.http.put(url, embarque).pipe(map((resp: ApiData) => resp.data));
  }
  deleteElement(embarque: Embarque): Observable<Embarque> {
    const url = this.api + '/embarque/' + embarque._id + '?token=' + this.authService.token;
    return this.http.delete(url).pipe(map((resp: ApiData) => resp.data));
  }
}
