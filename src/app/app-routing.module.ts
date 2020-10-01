import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './public/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'administrar',
    loadChildren: () => import('./pages/administrar/administrar.module').then(m => m.AdministrarModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./public/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'not-found',
    loadChildren: () => import('./public/not-found/not-found.module').then(m => m.NotFoundModule)
  },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
