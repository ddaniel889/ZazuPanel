import { Component, OnInit ,Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-p',
  templateUrl: './edit-p.component.html',
  styleUrls: ['./edit-p.component.css']
})
export class EditPComponent implements OnInit {
  Insert: any;
  public nombre: string;
  public detalle: string;
  public valor: string;
  public comision: string;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditPComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    this.nombre = data.nombre;
    this.detalle = data.detalle;
    this.valor = data.valor;
    this.comision = data.comision;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: [''],
      detalle: [''],
      valor: [''],
      comision: [''],
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
