import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { ClientService } from '../../client.service';

@Component({
  selector: 'app-edit-tarifas',
  templateUrl: './edit-tarifas.component.html',
  styleUrls: ['./edit-tarifas.component.css']
})
export class EditTarifasComponent implements OnInit {
  id: number;
  Insert: any;
  public nombre: string;
  public detalle: string;
  public valor: string;
  public comision: string;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,private client: ClientService,
    private dialogRef: MatDialogRef<EditTarifasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    this.nombre = data.nombre;
    this.detalle = data.detalle;
    this.valor = data.valor;
    this.comision = data.comision;
  }

  ngOnInit(): void {
      
    this.id = this.data.data;
    this.edit('tarifa/',this.id);
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

  edit(url,id) {
    this.client.getId(url,id)
    .subscribe( data => {
      console.log(data);
      this.form.setValue({
        nombre: data.nombre,
        detalle: data.detalle,
        valor: data.valor,
        comision: data.comision,
      });
     
    }
    );
  }
  save() {
    let a = this.id;
    this.client.update(`tarifa/${a}`, this.form.value).subscribe((data)=> {
      console.log(data);
        },
        error => {
          console.log(error);
        }
   );
    this.dialogRef.close(this.form.value);
    console.log(this.form.value);
}

}
