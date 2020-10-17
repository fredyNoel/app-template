import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ItemMenu } from '../../../interface/Interfaces';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styles: [`
    .example-container {
      height: calc(100vh - 64px);
      .mat-sidenav-content {
        height: calc(100vh - 64px);
      }
    }
  `]
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
        { label: 'Flota', url: 'flota', icon: 'local_shipping' },
      ]
    },
    {
      label: 'Bitacora',
      icon: 'assignment_turned_in',
      submenu: [
        { label: 'Embarque', url: 'embarque', icon: 'link' }
      ]
    }

  ];

  opened = true;

  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;

  constructor(
    private authService: AuthService
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

  salir() {
    this.authService.signOut();
  }

}
