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

  public displayedColumns: string[] = ['nombre', 'usuario', 'role', 'email', '_id'];
  public data: Usuario;

  constructor(
    private dialog: MatDialog,
    public usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.usuarioService.getAll().subscribe((resp) => this.data = resp);
  }

  openDialog(id: string = '') {
    this.dialog.open(UsuarioModalComponent, {});
  }

}
