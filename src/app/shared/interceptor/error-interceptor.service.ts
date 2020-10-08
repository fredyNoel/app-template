import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
    .pipe(
      catchError((err: HttpErrorResponse) => {
        let msg = '';
        if(err.error instanceof ErrorEvent) {
          console.log('Este es un error del cliente');
          msg = `Error: ${err.error.message}`;
        } else {
          console.log('Este es un error del servidor');
          msg = `Error code: ${err.status}, Message: ${err.message}`;
        }
        Swal.fire('Atencion', err.error.errors.message, 'error');
        console.log(msg);        
        return throwError(err);
      })
    );
  }
}
