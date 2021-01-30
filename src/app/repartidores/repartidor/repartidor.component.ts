import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EditDataComponent } from '../edit-data/edit-data.component';
import { EditPComponent } from '../edit-p/edit-p.component';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-repartidor',
  templateUrl: './repartidor.component.html',
  styleUrls: ['./repartidor.component.css']
})
export class RepartidorComponent implements OnInit {
  detail: any = [];
  id:string;
  zazu:string;
  tienda:string;
  persona: any; 
  transporte: any;
  localidad: any;
  domicilio: any;
  checked: boolean;
  dni: boolean
  constructor(private  actRoute: ActivatedRoute,private http: HttpClient, private router: Router,private client: ClientService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.checked = true
    this.id = this.actRoute.snapshot.params['id'];
    console.log(this.id);
    this.edit('repartidor/',this.id);
  }


 edit(url,id) {
    this.client.getId(url,id)
    .subscribe( data => {
      this.detail = data;
      for(let domicilio of data.persona.domicilio) {
        let dom = domicilio;
        this.domicilio= dom.domicilio;
        this.localidad = dom.zona.ciudad.nombre;
        console.log(this.localidad);
    }
      this.zazu = (this.detail.tipo_repartidor === 'EXTERNO')?'SI':'NO';
      this.tienda = (this.detail.tipo_repartidor === 'COMERCIO')? 'SI':'NO';
      this.persona = data.persona;  
     this.transporte = data.transporte;
     this.dni = data.persona.datoFiscal.pais.documento_identificador;
     console.log(this.dni); 
      console.log(this.detail); 
     console.log(this.persona);                     
                           
    }
    );
}


borrar(id) {
  this.client.delete('repartidor/',id).subscribe(data => {
    this.router.navigate(['/repartidores/rrepartidores']);
    },
    error => {
      console.log(error);
   
    }
);
  }

  onChange($event) {
    console.log('onChange+ valor de id', $event);
    this.checked = $event;
  
  }

  public clickPlan(): void {
   const dialogConfig = new MatDialogConfig();
   dialogConfig.disableClose = true;
   dialogConfig.autoFocus = true; 
   dialogConfig.width = "600px"; 
   dialogConfig.height = "300px"; 
 
   dialogConfig.data = {
     id: 1,
     title: 'Editar Plan'
   };
     const dialogRef = this.dialog.open(EditPComponent,dialogConfig );
     dialogRef.afterClosed().subscribe(result => {
       console.log(JSON.stringify(result));
       this.ngOnInit();
     });
 
  }

  public clickD(a): void {
   let id = a.id;
;
   const dialogConfig = new MatDialogConfig();
   
   dialogConfig.disableClose = true;
   dialogConfig.autoFocus = true; 
   dialogConfig.width = "600px"; 
   dialogConfig.height = "500px"; 
 
   dialogConfig.data = {
     id: 1,
     title: 'Datos Repartidor',
     data: id
   };

   
     const dialogRef = this.dialog.open(EditDataComponent,dialogConfig );
   
     dialogRef.afterClosed().subscribe(result => {
       console.log(JSON.stringify(result));
       this.ngOnInit();
     });
  }


}
