import { Component, OnInit } from '@angular/core';
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

  public displayColumns: string[] = ['nombre', 'telefono', 'isActive', 'role', '_id'];
  public data: Colaborador[];
  
  constructor(
    private dialog: MatDialog,
    private colaboradorService: ColaboradorService
  ) {
  }

  getAll() {
    return this.colaboradorService.getAll().subscribe(resp => this.data = resp);
  }
  
  ngOnInit(): void {
    this.getAll();
  }

  openDialog(data: Colaborador = {}) {
    const dialogRef = this.dialog.open(ColaboradorModalComponent, {data: data});
    dialogRef.afterClosed().subscribe(() => this.getAll());
  }

}
