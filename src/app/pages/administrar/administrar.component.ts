import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrar',
  // templateUrl: './administrar.component.html',
  template: `
  <app-sidenav>
    <div class="container pt-2">
      <router-outlet></router-outlet>
    </div>
  </app-sidenav>
  `,
  styleUrls: ['./administrar.component.scss']
})
export class AdministrarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
