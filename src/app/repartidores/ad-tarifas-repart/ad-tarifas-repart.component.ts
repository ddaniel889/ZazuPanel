import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ad-tarifas-repart',
  templateUrl: './ad-tarifas-repart.component.html',
  styleUrls: ['./ad-tarifas-repart.component.css']
})
export class AdTarifasRepartComponent implements OnInit {
  Insert: any;
  public nombre: string;
  public detalle: string;
  public valor: string;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AdTarifasRepartComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.nombre = data.nombre;
    this.detalle = data.detalle;
    this.valor = data.valor;
   }

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: [''],
      detalle: [''],
      valor: ['']
  });
  }

  save() {
    this.dialogRef.close(this.form.value);
    console.log(this.form.value);
}

close() {
  this.dialogRef.close();
}

}
