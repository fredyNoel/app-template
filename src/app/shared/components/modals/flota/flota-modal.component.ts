import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Flota } from 'src/app/interface/Interfaces';
import { FlotaService } from 'src/app/shared/services/flota.service';

@Component({
  selector: 'app-flota-modal',
  templateUrl: './flota-modal.component.html',
  styles: [
  ]
})
export class FlotaModalComponent implements OnInit {

  public forma: FormGroup;
  public isLoading: boolean;
  
  constructor(
    private fb: FormBuilder,
    private flotaService: FlotaService,
    private snack: MatSnackBar,
    public dialogRef: MatDialogRef<FlotaModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Flota
  ) {
    this.forma = this.fb.group({
      clave: [this.data.clave, Validators.required],
      placa: [this.data.placa],
      anio: [this.data.anio],
      capacidad: [this.data.capacidad],
      tipo: [this.data.tipo || 'FORD']
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
      this.flotaService.updateElement(this.forma.value)
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
      this.flotaService.addElement(this.forma.value)
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
