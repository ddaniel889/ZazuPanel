import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ClientService } from '../../client.service';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-tiendas',
  templateUrl: './add-tiendas.component.html',
  styleUrls: ['./add-tiendas.component.css']
})
export class AddTiendasComponent implements OnInit {
  person = [];
  pais = [];
  cat = [];
  tarifa = [];
  form: FormGroup;
  dataInsert: any;
  icono: any;
  public nombre: string;
  public localidad: string;
  public domicilio: string;
  public liquidacion: string;
  public telefono: number;  
  public tipo_repartidor: string;
  public categoria_comercio: number;
  public latitud: string;
  public longitud: string;
  public nit: string;
  public operar_en: string;
  public pais_id: number;
  public persona: number;
  public tarifa_id: number;
  

  constructor(
    private dialogRef: MatDialogRef<AddTiendasComponent>,private client: ClientService,public router: Router,
  ) { }

  ngOnInit(): void {
    this.cargarCategoria();
    this.cargarPais();
    this.cargarPersona();
    this.cargartarifa();
  }


  cargarPais() {
    this.client.get('persona')
    .subscribe( data => {
      this.pais = data.data;
      let pais = data.data.pais;
      console.log(pais);
     console.log(this.pais);
  
    }
    );
  }

  cargarPersona() {
    this.client.get('persona')
    .subscribe( data => {
      this.person = data.data;
     console.log(this.person);
  
    }
    );
  }
  
  cargartarifa() {
    this.client.get('tarifa')
    .subscribe( data => {
      this.tarifa = data.data;
     console.log(this.tarifa);
  
    }
    );
  }
  
  cargarCategoria() {
    this.client.get('categoria-comercio')
    .subscribe( data => {
      this.cat = data.data;
     console.log(this.cat);
  
    }
    );
  }
  
  public onFileChoosen(file: any) {
    this.icono = file; 
}

  close() {
    this.dialogRef.close();
  }
  save() {
    console.log(this.pais_id);
    console.log(this.tarifa_id);
    console.log(this.categoria_comercio);
    console.log(this.persona);

    const object: any = {
      tarifa_id : this.tarifa_id,
      tipo_liquidacion : this.liquidacion,
      persona_id:  this.persona,
      domicilio : this.domicilio,
      latitud : this.latitud,
      localidad : this.localidad,
      nit : this.nit,
      telefono : this.telefono,
      longitud:  this.longitud,
      pais_id : this.pais_id,
      nombre : this.nombre,
      operar_en : this.operar_en,
      tipo_repartidor : this.tipo_repartidor,
      categoria_comercio_id : this.categoria_comercio
    }

    this.client.post('comercio', object,[
      { name:'imagen', file: this.icono },
  ]).subscribe((data)=> {
      console.log(data);
      this.router.navigateByUrl('/tiendas/tienda');
        },
        error => {
          console.log(error);
        }
   );
   console.log(object);
    this.dialogRef.close(object);

}

}
