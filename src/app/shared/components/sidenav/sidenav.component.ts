import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { UsuariosService } from '../../../services/services.index';
import { ItemMenu } from '../../../interface/Interfaces';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  public Menu: ItemMenu[] = [
    {
      label: 'Administrar',
      icon: 'settings',
      submenu: [
        { label: 'Usuarios', url: 'usuarios', icon: 'supervisor_account' },
        { label: 'Colaboradores', url: 'colaboradores', icon: 'people_outline' },
        { label: 'Ruta', url: 'rutas', icon: 'alt_route' },
      ]
    },
    {
      label: 'Bitacora',
      icon: 'assignment_turned_in'
    }

  ];

  opened = true;

  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;

  constructor(
    private _usuarioService: UsuariosService
  ) {}

  ngOnInit() {
    if (window.innerWidth < 768) {
      this.sidenav.fixedTopGap = window.innerWidth > 600 ? 64 : 56;
      this.opened = false;
    } else {
      this.sidenav.fixedTopGap = 64;
      this.opened = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 768) {
      this.sidenav.fixedTopGap = event.target.innerWidth > 600 ? 64 : 56;
      this.opened = false;
    } else {
      this.sidenav.fixedTopGap = 64
      this.opened = true;
    }
  }

  isBiggerScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width < 768) {
      return  true;
    } else {
      return false;
    }
  }

  salir(): void {
    this._usuarioService.logout();
  }

}
