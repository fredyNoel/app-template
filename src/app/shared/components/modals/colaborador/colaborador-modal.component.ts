import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Colaborador } from 'src/app/interface/Interfaces';

import { ColaboradorService } from '../../../../shared/services/colaborador.service';

@Component({
  selector: 'app-colaborador-modal',
  templateUrl: './colaborador-modal.component.html',
  styles: [
  ]
})
export class ColaboradorModalComponent implements OnInit {

  public forma: FormGroup;
  public isLoading: boolean;
  public mode: string;
  public title: string = 'Registro';
    
  constructor(
    private fb: FormBuilder,
    private colaboradorService: ColaboradorService,
    private snack: MatSnackBar,
    public dialogRef: MatDialogRef<ColaboradorModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Colaborador
  ) {
    this.forma = this.fb.group({
      nombre: [this.data.nombre, Validators.required],
      apellidos: [this.data.apellidos],
      direccion: [this.data.direccion],
      telefono: [this.data.telefono],
      role: [this.data.role || 'AUX_RUTA', Validators.required],
    });
  }

  ngOnInit(): void {
    if(this.data._id) {
      this.title = 'Actualizar';
    }
  }

  saveData() {
    if(!this.forma.valid) {
      return this.snack.open('Favor de rellenar los compos!', 'Ok', {duration: 3000});
    }
    this.isLoading = true;
    
    if(this.data._id) {
      this.forma.value._id = this.data._id;      
      this.colaboradorService.updateElement(this.forma.value)
      .subscribe(
        (resp) => {
          this.dialogRef.close(resp);
          this.isLoading = false;
          this.snack.open('Registro actualizado satisfactoriamente!', 'Ok');
        },
        () => this.isLoading = false
      );
    } else {
      this.colaboradorService.addElement(this.forma.value)
      .subscribe(
        (resp) => {
          this.dialogRef.close(resp);
          this.isLoading = false;
          this.snack.open('Registro agregado satisfactoriamente!', 'Ok');
        },
        () => this.isLoading = false
      );
    }
  }

}
