import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuariosService } from '../usuarios/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private _usuarioService: UsuariosService,
    private router: Router
  ) {}
  
  canActivate(): boolean {
    if(this._usuarioService.verificaLogin()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return true;
    }
  }
  
}
