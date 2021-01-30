import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-addcategorias',
  templateUrl: './addcategorias.component.html',
  styleUrls: ['./addcategorias.component.css']
})
export class AddcategoriasComponent implements OnInit {
  Insert: any;
  public nombre: string;
  public descripcion: string;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddcategoriasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    this.nombre = data.nombre;
    this.descripcion = data.descripcion;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: [''],
      descripcion: ['']
  });
  }

  close() {
    this.dialogRef.close();
  }
  save() {
    this.dialogRef.close(this.form.value);
    console.log(this.form.value);
}
}
