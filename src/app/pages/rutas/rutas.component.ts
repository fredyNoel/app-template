import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { RutaService } from '../../shared/services/ruta.service';
import { Ruta } from '../../interface/Interfaces';
import { RutaModalComponent } from '../../shared/components/modals/ruta/ruta-modal.component';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styles: [
  ]
})
export class RutasComponent implements OnInit {

  public displayColumns: string[] = ['clave', 'nombre', 'tipo_ruta', 'actions'];
  data: Ruta[];

  constructor(
    private rutaService: RutaService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    return this.rutaService.getAll().subscribe((resp: Ruta[]) => this.data = resp);
  }

  openDialog(data: Ruta = {}) {
    const dialogRef = this.dialog.open(RutaModalComponent, {data});
    dialogRef.afterClosed().subscribe(() => this.getAll());
  }

}
