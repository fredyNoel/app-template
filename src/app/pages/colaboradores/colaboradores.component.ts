import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColaboradorService } from '../../shared/services/colaborador.service';
import { Colaborador } from '../../interface/Interfaces';
import { ColaboradorModalComponent } from '../../shared/components/modals/colaborador/colaborador-modal.component';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styles: [
  ]
})
export class ColaboradoresComponent implements OnInit {

  public displayColumns: string[] = ['nombre', 'telefono', 'status', 'role', 'actions'];
  public data: Colaborador;
  
  constructor(
    private dialog: MatDialog,
    private colaboradorService: ColaboradorService
  ) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    return this.colaboradorService.getAll().subscribe((resp: Colaborador) => this.data = resp);
  }
  
  openDialog(data: Colaborador = {}) {
    const dialogRef = this.dialog.open(ColaboradorModalComponent, {data});
    dialogRef.afterClosed().subscribe(() => this.getAll());
  }

}
