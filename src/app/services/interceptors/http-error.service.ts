import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpErrorService {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req)
    .pipe(
      catchError((err: HttpErrorResponse) => {
        let errorMsg = '';
        if(err.error instanceof ErrorEvent) {
          console.log('Este es un error del cliente');
          errorMsg = `Error: ${err.error.message}`;
        } else {
          console.log('Este es un error del servidor');
          errorMsg = `Error code: ${err.status}, Message: ${err.message}`;
        }
        // Swal.fire('Atencion', err.error.errors.message, 'error');
        console.log('Mi error personalizao');

        return throwError(err);
      })
    );
  }

}
