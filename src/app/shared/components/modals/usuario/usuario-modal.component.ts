import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Usuario } from '../../../../interface/Interfaces';
import { UsuarioService } from '../../../../shared/services/usuario.service';

@Component({
  selector: 'app-usuario-modal',
  templateUrl: './usuario-modal.component.html',
  styles: [
  ]
})
export class UsuarioModalComponent implements OnInit {

  public forma: FormGroup;
  public isLoading: boolean;
  
  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private snack: MatSnackBar,
    public dialogRef: MatDialogRef<UsuarioModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Usuario
  ) {
    this.forma = this.fb.group({
      nombre: [this.data.nombre, Validators.required],
      apellidos: [this.data.apellidos],
      direccion: [this.data.direccion],
      telefono: [this.data.telefono],
      usuario: [this.data.usuario, Validators.required],
      password: [],
      email: [this.data.email],
      role: [this.data.role || 'USER_ROLE', Validators.required]
    });
  }

  ngOnInit(): void {    
  }

  saveData() {
    if(!this.forma.valid) {
      return this.snack.open('Favor de rellenar los compos!', 'Ok');
    }
    this.isLoading = true;
    if(this.data._id) {
      this.forma.value._id = this.data._id;      
      this.usuarioService.updateElement(this.forma.value)
      .subscribe(
        (resp) => {
          this.dialogRef.close(resp);
          this.isLoading = false;
          this.snack.open('Registro actualizado satisfactoriamente!', 'Ok');
        },
        () => this.isLoading = false
      );
    } else {
      this.usuarioService.addElement(this.forma.value)
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
