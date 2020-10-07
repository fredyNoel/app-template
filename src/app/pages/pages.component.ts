import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  template: `
    <app-sidenav>
      <div class="container-fluid pt-3">
        <router-outlet></router-outlet>
      </div>
    </app-sidenav>
  `,
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
