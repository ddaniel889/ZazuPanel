import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { ClientService } from '../../client.service';

@Component({
  selector: 'app-edit-plan',
  templateUrl: './edit-plan.component.html',
  styleUrls: ['./edit-plan.component.css']
})
export class EditPlanComponent implements OnInit {
  Insert: any;
  vh: any = [];
  public nombre: string;
  form: FormGroup;
  localidad: string;
  id: number;
  categoria: number;
  
  constructor(
    private fb: FormBuilder, private client: ClientService,
    private dialogRef: MatDialogRef<EditPlanComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
   
   }

  ngOnInit(): void {
    this.id = this.data.data;
    this.cargarCategoria();
    this.editData('comercio/',this.id);
    this.form = this.fb.group({
      nombre: [''],
      localidad: [''],
      estado: [''],
      telefono: [''],
      nit: [''],
      tarifa_id: [''],
      categoria_comercio_id: this.categoria,
      tipo_repartidor: [''],
      tipo_liquidacion: [''],
      operar_en: ['']
  });
  }

  editData(url,id) {
    this.client.getId(url,id)
    .subscribe( data => {
      for(let domicilio of data.domicilios) {
        let dom = domicilio;
        this.localidad= dom.zona.nombre;
        console.log(this.localidad);
    }
      console.log(data);
      this.form.setValue({
        nombre: data.nombre,
        localidad: this.localidad,
        estado: data.estado,
        telefono: data.telefono,
        categoria_comercio_id: data.categoria_comercio_id, 
        nit: data.nit,
        tarifa_id: data.tarifa_id,
        tipo_repartidor: data.tipo_repartidor,
        tipo_liquidacion: data.tipo_liquidacion,
        operar_en: data.operar_en
      });
     
    }
    );
  }

  
  cargarCategoria() {
    this.client.get('categoria-comercio')
    .subscribe( data => {
     this.vh = data.data;
     console.log(this.vh);

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
