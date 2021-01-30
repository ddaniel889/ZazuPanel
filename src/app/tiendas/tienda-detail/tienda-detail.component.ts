import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { EditGenComponent } from '../edit-gen/edit-gen.component';
import { EditConfigComponent } from '../edit-config/edit-config.component';
import { EditPlanComponent } from '../edit-plan/edit-plan.component';

@Component({
  selector: 'app-tienda-detail',
  templateUrl: './tienda-detail.component.html',
  styleUrls: ['./tienda-detail.component.css']
})
export class TiendaDetailComponent implements OnInit {

  checked: boolean;
  detail: any = [];
  id:string;
  variable: any;
  dom: any = [];
  localidad : any;
  fecha : any;
  personas: any;
  person:any;
  nombre:string;
  correo:string;
  dni:string;


  constructor(private  actRoute: ActivatedRoute, private router: Router,private client: ClientService,public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.id = this.actRoute.snapshot.params['id'];
    console.log('valor de id'+this.id);
    console.log('valor de edit'+1);
    this.edit('comercio/',this.id);
    this.variable = 'hola';
    /*console.log(this.edit(this.id));*/
  }

  clickGen(a){
    let id = a.id;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true; 
    dialogConfig.width = "600px"; 
    dialogConfig.height = "500px"; 
  
    dialogConfig.data = {
      id: 1,
      title: 'Datos de Tienda',
      data: id
    };
      const dialogRef = this.dialog.open(EditGenComponent,dialogConfig );
      dialogRef.afterClosed().subscribe(result => {
        console.log(JSON.stringify(result));
        this.ngOnInit();
      });
}


  public clickConfig(a): void {
    let id = a.id;
    console.log('configuracion de tienda'+id);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true; 
    dialogConfig.width = "600px"; 
    dialogConfig.height = "400px"; 
  
    dialogConfig.data = {
      id: 1,
      title: 'Editar Configuración de Tienda',
      data: id
    };
      const dialogRef = this.dialog.open(EditConfigComponent,dialogConfig );
      dialogRef.afterClosed().subscribe(result => {
        console.log(JSON.stringify(result));
        this.ngOnInit();

      });
}

public clickPlan(b): void {
  let id = b.id;
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true; 
  dialogConfig.width = "600px"; 
  dialogConfig.height = "300px"; 

  dialogConfig.data = {
    id: 1,
    title: 'Editar Categoría de Tienda',
    data: id
  };
    const dialogRef = this.dialog.open(EditPlanComponent,dialogConfig );
    dialogRef.afterClosed().subscribe(result => {
      console.log(JSON.stringify(result));
      this.ngOnInit();
    });

}

onChange($event) {
  console.log('onChange+ valor de id', $event);
  this.checked = $event;

}
  edit(url,id) {
    this.client.getId(url,id)
    .subscribe( data => {
      this.detail = data;
      this.person = data.personas;
     console.log(this.detail);
     for(let data of this.person) {
      this.nombre = data.nombre;
      this.correo = data.correo;
      this.dni = data.pais.documento_identificador;
  }

     for(let domicilio of data.domicilios) {
      this.dom = domicilio;
      this.localidad = this.dom.zona.nombre;
      this.fecha = this.dom.zona.fecha_creacion;
      console.log(this.dom);
  }
     

    }
    );
}

borrar(id) {
  this.client.delete('comercio/',id).subscribe(data => {
    this.router.navigate(['/tiendas/tienda']);
    },
    error => {
      console.log(error);
   
    }
);
  }

}
