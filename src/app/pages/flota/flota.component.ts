import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { FlotaService } from '../../shared/services/flota.service';
import { Flota } from '../../interface/Interfaces';
import { FlotaModalComponent } from '../../shared/components/modals/flota/flota-modal.component';

@Component({
  selector: 'app-flota',
  templateUrl: './flota.component.html',
  styles: [
  ]
})
export class FlotaComponent implements OnInit {

  public displayColumns: string[] = ['clave', 'placa', 'capacidad', 'tipo', 'actions'];
  data: Flota[];
  
  constructor(
    private flotaService: FlotaService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    return this.flotaService.getAll().subscribe((resp: Flota[]) => this.data = resp);
  }

  openDialog(data: Flota = {}) {
    const dialogRef = this.dialog.open(FlotaModalComponent, {data});
    dialogRef.afterClosed().subscribe(() => this.getAll());
  }

}
