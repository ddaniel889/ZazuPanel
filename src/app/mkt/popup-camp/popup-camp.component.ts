import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ClientService } from '../../client.service';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-popup-camp',
  templateUrl: './popup-camp.component.html',
  styleUrls: ['./popup-camp.component.css']
})
export class PopupCampComponent implements OnInit {
  public td = [];
  public veh = [];
  public prod = [];
  form: FormGroup;
  dataInsert: any;
  public descripcion: string;
  public tienda: number;
  public producto: number;
  public influencer: number;
  public fb: boolean;
  public inst: boolean;
  public tw: boolean;
  public red: string;
  public fecha_hasta: any;
  public fecha_desde: any;

  constructor(
    private dialogRef: MatDialogRef<PopupCampComponent>,private client: ClientService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    
  }

  ngOnInit(): void {
    this.cargarComercio();
    this.cargarProduct();
    this.cargarInfl();
  }

  cargarProduct() {
    this.client.get('producto')
    .subscribe( data => {
      this.prod = data.data;
     console.log(this.prod);
  
    }
    );
  }

  cargarComercio() {
    this.client.get('comercio')
    .subscribe( data => {
      this.td = data.data;
     console.log(this.td);
  
    }
    );
  }

  cargarInfl() {
    this.client.get('influencer')
    .subscribe( data => {
      this.veh = data.data;
     console.log(this.veh);
  
    }
    );
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    let f = (this.fb === true) ? "SI" : "NO";
    let i = (this.inst === true) ? "SI" : "NO";
    let t = (this.tw === true) ? "SI" : "NO";
    const object: any = {
      descripcion : this.descripcion,
      comercio_id : this.tienda,
      producto_id:  this.producto,
      fb : f,
      inst : i,
      tw : t,
      influencer_id : this.influencer,
      fecha_desde : this.fecha_desde,
      fecha_hasta : this.fecha_hasta
    }
    this.client.post('campanna', object).subscribe((data)=> {
      console.log(data);
      this.ngOnInit();
        },
        error => {
          console.log(error);
        }
   );
    this.dialogRef.close(object);  
}




}
