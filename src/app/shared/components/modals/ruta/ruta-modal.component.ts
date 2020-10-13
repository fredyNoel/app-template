import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Ruta } from '../../../../interface/Interfaces';
import { RutaService } from '../../../services/ruta.service';

@Component({
  selector: 'app-ruta-modal',
  templateUrl: './ruta-modal.component.html',
  styles: [
  ]
})
export class RutaModalComponent implements OnInit {

  public forma: FormGroup;
  public isLoading: boolean;
  
  constructor(
    private fb: FormBuilder,
    private rutaService: RutaService,
    private snack: MatSnackBar,
    public dialogRef: MatDialogRef<RutaModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Ruta
  ) {
    this.forma = this.fb.group({
      clave: [this.data.clave, Validators.required],
      nombre: [this.data.nombre],
      subrutas: [this.data.subrutas],
      tipo_ruta: [this.data.tipo_ruta || 'RUTA']
    });
  }

  ngOnInit(): void {
  }

  saveData() {
    if(this.forma.invalid) {
      return this.snack.open('Favor de llenar los campos obligatorios!', 'Ok');
    }
    if(this.data._id) {
      this.isLoading = true;
      this.forma.value._id = this.data._id;
      this.rutaService.updateElement(this.forma.value)
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
      this.rutaService.addElement(this.forma.value)
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
