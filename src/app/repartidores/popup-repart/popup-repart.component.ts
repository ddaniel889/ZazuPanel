import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { ClientService } from '../../client.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-popup-repart',
  templateUrl: './popup-repart.component.html',
  styleUrls: ['./popup-repart.component.css']
})
export class PopupRepartComponent implements OnInit {
  person = [];
  veh = [];
  tienda = [];
  form: FormGroup;
  dataInsert: any;
  public nombre: string;
  public apellidos: string;
  public domicilio: string;
  public cuit: string;
  public telefono: number;  
  public tipo_repartidor: string;
  public tipo_transporte_id: number;
  public dominio: string;
  public nit: string;
  public correo: string;
  public genero: string; 
  public fecha_nacimiento: string; 
  public pais_id: number;
  public comercio_id: number;
  public myDate: string;
  
  constructor(
    private client: ClientService, public router: Router,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<PopupRepartComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    
  }

  ngOnInit(): void {
    this.cargarComercio();
    this.cargarPais();
    this.cargarTransport();
    this.form = this.fb.group({
      nombre: [''],
      apellidos: [''],
      telefono: [''],
      cuit: [''],
      domicilio: [''],
      tipo_transporte_id: [''],
      dominio: [''],
      nit: [''],
      correo: [''],
      genero: [''],
      fecha_nacimiento: [''],
      pais_id: [''],
      comercio_id : ['']

  });

  }
  close() {
   
    this.dialogRef.close();
  }
  save() {
    console.log(this.form.value.fecha_nacimiento);
    this.client.post('repartidor', this.form.value).subscribe((data)=> {
      console.log(data);
     // this.router.navigateByUrl('/repartidores/rrepartidores');
        },
        error => {
          console.log(error);
        }
   );
    this.dialogRef.close(this.form.value);
    console.log(this.form.value);
}

cargarPais() {
  this.client.get('persona')
  .subscribe( data => {
    this.person = data.data;
    let pais = data.data.pais;
    console.log(pais);
   console.log(this.person);

  }
  );
}

cargarComercio() {
  this.client.get('comercio')
  .subscribe( data => {
    this.tienda = data.data;
   console.log(this.tienda);

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
