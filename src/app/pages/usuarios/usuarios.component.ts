import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Usuario } from '../../interface/Interfaces';
import { UsuarioModalComponent } from '../../shared/components/modals/usuario/usuario-modal.component';
import { UsuarioService } from '../../shared/services/usuario.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [
  ]
})
export class UsuariosComponent implements OnInit {

  public displayedColumns: string[] = ['nombre', 'usuario', 'telefono', 'role', 'email', 'actions'];
  public data: Usuario[];

  constructor(
    private dialog: MatDialog,
    public usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    return this.usuarioService.getAll().subscribe((resp: Usuario[]) => this.data = resp);
  }

  openDialog(data: Usuario = {}) {
    const dialogRef = this.dialog.open(UsuarioModalComponent, {data});
    dialogRef.afterClosed().subscribe(() => this.getAll());
  }

}
