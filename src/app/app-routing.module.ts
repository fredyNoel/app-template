import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './public/home/home.component';
import { LoginGuard } from './services/services.index';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  }, 
  {
    path: '',
    loadChildren: () => import('./public/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'dashboard',
    canActivate: [LoginGuard],
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
