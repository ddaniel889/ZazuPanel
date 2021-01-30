import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { ClientService } from '../../client.service';


@Component({
  selector: 'app-edit-gen',
  templateUrl: './edit-gen.component.html',
  styleUrls: ['./edit-gen.component.css']
})
export class EditGenComponent implements OnInit {
  Insert: any;
  public nombre: string;
  public categoria_comercio_id: number;
  public domicilio: string;
  public telefono: string;
  public correo: string;
  form: FormGroup;
  id: number;
  tarifa: any = [];
  detail: any;
  localidad: string;
  dom:any;

  constructor(
    private fb: FormBuilder, private client: ClientService,
    private dialogRef: MatDialogRef<EditGenComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
   
  }

  ngOnInit(): void {
    this.cargartarifa();
    this.id = this.data.data;
    console.log('Id que llega'+this.id);
    this.edit('comercio/',this.id);
    this.form = this.fb.group({
      nombre: [''],
      localidad: [''],
      estado: [''],
      telefono: [''],
      nit: [''],
      tarifa_id: [''],
      categoria_comercio_id: [''],
      tipo_repartidor: [''],
      tipo_liquidacion: [''],
      operar_en: ['']
  });
  }

  cargartarifa() {
    this.client.get('tarifa')
    .subscribe( data => {
      this.tarifa = data.data;
     console.log(this.tarifa);
  
    }
    );
  }
  edit(url,id) {
    this.client.getId(url,id)
    .subscribe( data => {
      this.detail = data;
      this.dom = data.domicilios;
     console.log(this.detail);

     for(let domicilio of data.domicilios) {
      this.dom = domicilio;
      this.localidad = this.dom.zona.nombre;
  }

      console.log(data);
      this.form.setValue({
        nombre: this.detail.nombre,
        localidad: this.localidad,
        estado: this.detail.estado,
        telefono: this.detail.telefono,
        nit: this.detail.nit,
        tarifa_id: this.detail.tarifa_id,
        categoria_comercio_id: this.detail.categoria_comercio_id,
        tipo_repartidor: this.detail.tipo_repartidor,
        tipo_liquidacion: this.detail.tipo_liquidacion,
        operar_en: this.detail.operar_en
      });
     
    }
    );
  }
  close() {
    this.dialogRef.close();
  }
  save() {
    let a = this.id;
    this.client.update(`comercio/${a}`, this.form.value).subscribe((data)=> {
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
