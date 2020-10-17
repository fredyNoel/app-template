import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Embarque } from 'src/app/interface/Interfaces';
import { EmbarqueModalComponent } from 'src/app/shared/components/modals/bitacora/embarque/embarque-modal.component';
import { EmbarqueService } from 'src/app/shared/services/bitacora/embarque.service';

@Component({
  selector: 'app-embarque',
  templateUrl: './embarque.component.html',
  styles: [
  ]
})
export class EmbarqueComponent implements OnInit {
  public displayColumns: string[] = ['folio', 'chofer', 'auxiliar', 'supervisor', 'ruta', 'unidad', 'peso', 'importe', 'actions'];
  public data: Embarque[];
  private temp: Embarque = {usuario: {},chofer: {},auxiliar: {},ruta: {},unidad: {},supervisor: {}};
  constructor(
    private embarqueService: EmbarqueService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    return this.embarqueService.getAll().subscribe((resp: Embarque[]) => this.data = resp);
  }

  openDialog(data: Embarque = this.temp) {
    const dialogRef = this.dialog.open(EmbarqueModalComponent, {data});
    dialogRef.beforeClosed().subscribe(() => this.getAll());
  }

}
