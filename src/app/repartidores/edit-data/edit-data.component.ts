import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ClientService } from '../../client.service';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.css']
})
export class EditDataComponent implements OnInit {
  id: string;
  veh =  [];
  Insert: any;
  person: any;
  datos:any;
  transporte: any;
  public domicilio: string;
  public localidad: string;
  public correo: string;
  public telefono: string;
  public nit: string;
  tipo_transporte_id: number;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,private client: ClientService, private  actRoute: ActivatedRoute,
    private dialogRef: MatDialogRef<EditDataComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    
  }

  ngOnInit(): void {
    this.id = this.data.data;
    console.log('el id'+this.id);
    this.edit('repartidor/',this.id);
    this.cargarTransport();
    this.form = this.fb.group({
      nombre: [''],
      apellidos: [''],
      correo: [''],
      genero: [''],
      dominio: [''],
      comercio_id: [''],
      cuit: [''],
      fecha_nacimiento: [''],
      pais_id: [''],
      domicilio: [''],
      localidad: [''],
      telefono: [''],
      nit: [''],
      tipo_transporte_id: ['']

  });
    
  }

  close() {
    this.dialogRef.close();
  }
  save() {
    let a = this.id;
    this.client.update(`repartidor/${a}`, this.form.value).subscribe((data)=> {
      console.log(data);
        },
        error => {
          console.log(error);
        }
   );
    this.dialogRef.close(this.form.value);
    console.log(this.form.value);
}

edit(url,id) {
  this.client.getId(url,id)
  .subscribe( data => {
   this.person = data.persona;
   console.log('valorrrrrr'+data.persona);
   this.transporte = data.transporte;
   for(let domicilio of data.persona.domicilio) {
    let dom = domicilio;
    console.log('valor de dom en 1st posicion'+dom);
    this.domicilio= dom.domicilio;
    /*this.localidad = this.domicilio;*/
   this.localidad = dom.zona.ciudad.nombre;

    console.log(this.localidad);
}
    console.log(data);
    this.form.setValue({
      nombre: this.person.nombre,
      apellidos: this.person.apellidos,
      correo: this.person.correo,
      genero: this.person.genero,
      dominio: this.transporte.dominio,
      comercio_id: data.comercio_id,
      cuit: this.person.correo,
      fecha_nacimiento: this.person.fecha_nacimiento,
      pais_id: this.person.pais_id,
      domicilio: this.domicilio,
      localidad: this.localidad,
      telefono: this.person.telefono,
      nit: this.person.correo,
      tipo_transporte_id: this.transporte.tipo_transporte_id
    });
   
  }
  );
}

cargarTransport() {
  this.client.get('tipo-transporte')
  .subscribe( data => {
    this.veh = data.data;
   console.log(this.veh);

  }
  );
}


}
