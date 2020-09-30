import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ItemMenu } from '../../../interface/main';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  
  public Menu: ItemMenu[] = [
    {
      label: 'Administrar',
      icon: 'link',
      submenu: [
        {label: 'Usuarios', url: 'link1', icon: 'link'},
        {label: 'Colaboladores', url: 'link2', icon: 'link'},
        {label: 'Ruta', url: 'link3', icon: 'link'},
      ]
    },
    {
      label: 'Bitacora',
      icon: 'link',
      submenu: [
        {label: 'Embarque', url: 'link1', icon: 'link'},
        {label: 'Devolucion', url: 'link2', icon: 'link'}
      ]
    }

  ];

  opened = true;

  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;
  
  constructor() {}
  
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

}
