import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  declarations: [SidenavComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [SidenavComponent]
})
export class SharedModule { }
