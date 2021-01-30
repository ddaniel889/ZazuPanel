import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { ClientService } from '../../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-bonr',
  templateUrl: './edit-bonr.component.html',
  styleUrls: ['./edit-bonr.component.css']
})
export class EditBonrComponent implements OnInit {
  form: FormGroup;
  dataInsert: any;
  public nombre: string;
  public descripcion: string;
  public descuento: number;
  public valor: number;
  public inicio: any;
  public fin: any;
  public ffin: any;
  public finicio: any;

  constructor(
    private fb: FormBuilder,private client: ClientService, public router: Router,
    private dialogRef: MatDialogRef<EditBonrComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.nombre = data.nombre;
    this.descripcion = data.descripcion;
    this.finicio = data.finicio;
    this.inicio = data.inicio;
    this.ffin = data.ffin;
    this.fin = data.fin;
    this.descuento = data.descuento;
    this.valor = data.valor;
   }

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: [''],
      descripcion: [''],
      finicio: [''],
      inicio: [''],
      ffin: [''],
      fin: [''],
      descuento: [''],
      valor: ['']
  });
  }

  closeWithoutSave() {
    this.dialogRef.close();
  }
  save() {
    console.log(this.form.value);
    this.dialogRef.close(this.form.value);
    
}

}
