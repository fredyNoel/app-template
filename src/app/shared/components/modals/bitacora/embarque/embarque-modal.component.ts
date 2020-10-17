import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Colaborador, Embarque, Flota, Ruta } from 'src/app/interface/Interfaces';
import { EmbarqueService } from 'src/app/shared/services/bitacora/embarque.service';
import { ColaboradorService } from 'src/app/shared/services/colaborador.service';
import { FlotaService } from 'src/app/shared/services/flota.service';
import { RutaService } from 'src/app/shared/services/ruta.service';

import * as _moment from 'moment';
const moment = _moment;

@Component({
  selector: 'app-embarque-modal',
  templateUrl: './embarque-modal.component.html',
  styles: [
    
  ]
})
export class EmbarqueModalComponent implements OnInit {
  public forma: FormGroup;
  public isLoading: boolean;
  public colaboradores: Colaborador[] = [{}];
  public rutas: Ruta[] = [{}];
  public flotas: Flota[] = [{}];
  constructor(
    private fb: FormBuilder,
    private embarqueService: EmbarqueService,
    private colaboradorService: ColaboradorService,
    private rutaService: RutaService,
    private flotaService: FlotaService,
    private snack: MatSnackBar,
    public dialogRef: MatDialogRef<EmbarqueModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Embarque
  ) {
    this.forma = this.fb.group({
      folio: [this.data.folio, Validators.required],
      chofer: [this.data.chofer._id, Validators.required],
      auxiliar: [this.data.auxiliar._id, Validators.required],
      supervisor: [this.data.supervisor._id, Validators.required],
      ruta: [this.data.ruta._id, Validators.required],
      unidad: [this.data.unidad._id, Validators.required],
      peso: [this.data.peso],
      importe: [this.data.importe],
      fecha_embarque: [moment(this.data.fecha_embarque).toISOString()],
      fecha_entrega: [moment(this.data.fecha_entrega).toISOString()],
    });
  }
  
  ngOnInit(): void {
    this.colaboradorService.getAll().subscribe((resp: Colaborador[]) => this.colaboradores = resp);
    this.rutaService.getAll().subscribe((resp: Ruta[]) => this.rutas = resp);
    this.flotaService.getAll().subscribe((resp: Flota[]) => this.flotas = resp);
  }
  
  saveData() {
    if(this.forma.invalid) {
      return this.snack.open('Favor de llenar los campos obligatorios!', 'Ok');
    }
    if(this.data._id) {
      this.isLoading = true;
      this.forma.value._id = this.data._id;
      this.embarqueService.updateElement(this.forma.value)
      .subscribe(
        () => {
          this.isLoading = false;
          this.dialogRef.close();
          this.snack.open('Registro actualizado satisfactoriamente!', 'Ok');
        },
        () => this.isLoading = false
      );
    } else {
      this.isLoading = true;
      this.embarqueService.addElement(this.forma.value)
      .subscribe(
        () => {
          this.isLoading = false;
          this.dialogRef.close();
          this.snack.open('Registro agregado satisfactoriamente!', 'Ok');
        },
        () => this.isLoading = false
      );
    }
  }

}
