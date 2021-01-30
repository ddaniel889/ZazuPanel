import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { ClientService } from '../../client.service';

@Component({
  selector: 'app-popup-bon',
  templateUrl: './popup-bon.component.html',
  styleUrls: ['./popup-bon.component.css']
})
export class PopupBonComponent implements OnInit {
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
  public plan: string;
  public fone : string;
  public fdos : string;

  constructor(
    private fb: FormBuilder,private client: ClientService,
    private dialogRef: MatDialogRef<PopupBonComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    /*this.nombre = data.nombre;
    this.descripcion = data.descripcion;
    this.descuento = data.descuento;
    this.valor = data.valor;
    this.inicio = data.inicio;
    this.fin = data.fin;
    this.ffin = data.ffin;
    this.finicio = data.finicio;
    this.plan = data.plan;*/
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: [''],
      descripcion: [''],
      descuento: [''],
      valor: [''],
      inicio: [''],
      fin: [''],
      ffin: this.fone,
      finicio: this.fdos,
      plan: ['']
  });
  }


  closeWithoutSave() {
    this.dialogRef.close();
  }

  save() {
    const object: any = {
      nombre : this.form.value.nombre,
      fecha_desde : this.form.value.finicio+' '+this.form.value.inicio,
      fecha_hasta:  this.form.value.ffin+' '+this.form.value.fin,
      tipo_descuento : this.form.value.descuento,
      valor : this.form.value.valor,
    }
    this.client.post('bonificacion', object).subscribe((data)=> {
      console.log(data);
     
        },
        error => {
          console.log(error);
        }
   );
    this.dialogRef.close(this.form.value);
    console.log(object);
}

}
