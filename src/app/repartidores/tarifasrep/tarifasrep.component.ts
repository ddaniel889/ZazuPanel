import { AfterViewInit,Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../../client.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AdTarifasRepartComponent } from '../ad-tarifas-repart/ad-tarifas-repart.component';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { EditComisionComponent } from '../edit-comision/edit-comision.component';

@Component({
  selector: 'app-tarifasrep',
  templateUrl: './tarifasrep.component.html',
  styleUrls: ['./tarifasrep.component.css']
})
export class TarifasrepComponent implements OnInit,AfterViewInit {
  obj: any ;
  tipos: any = [];
  public displayedColumns = ['Nombre Comisión','Detalle','Valor','id'];
dataSource: MatTableDataSource<any>  = new MatTableDataSource();
@ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public router: Router, private client: ClientService,public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.displayedColumns = ['Nombre Comisión','Detalle','Valor','id'];
    this.cargarCosto();
    this.dataSource.data = this.tipos;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  cargarCosto() {
    this.client.get('envio?limit=20')
    .subscribe( data => {
      this.obj = data.data;
      this.dataSource.data = data.data;
      this.tipos = data.data;
     console.log(this.tipos);

    }
    );
}

borrar(id) {
  this.client.delete('envio/',id).subscribe(data => {
   this.ngOnInit();
    },
    error => {
      console.log(error);
   
    }
);
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true; 
  dialogConfig.width = "600px"; 
  dialogConfig.height = "460px"; 
  dialogConfig.data = {
    id: 1,
    title: 'tarifas Repartidores'
  };
    const dialogRef = this.dialog.open(AdTarifasRepartComponent,dialogConfig );  
    dialogRef.afterClosed().subscribe(result => {
      console.log(JSON.stringify(result));
      // post a tarifa de repartidor
      /*this.client.post('tarifa', result).subscribe((data)=> {
        console.log(data);
        this.ngOnInit();
        this.router.navigateByUrl('/tiendas/tarifas');
          },
          error => {
            console.log(error);
          }
     );*/
    });
  }

  editCom() {
    const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true; 
  dialogConfig.width = "600px"; 
  dialogConfig.height = "460px"; 
  dialogConfig.data = {
    id: 1,
    title: 'Editar Repartidores'
  };
    const dialogRef = this.dialog.open(EditComisionComponent,dialogConfig );  
    dialogRef.afterClosed().subscribe(result => {
      console.log(JSON.stringify(result));
      // post a tarifa de repartidor
      /*this.client.post('tarifa', result).subscribe((data)=> {
        console.log(data);
        this.ngOnInit();
        this.router.navigateByUrl('/tiendas/tarifas');
          },
          error => {
            console.log(error);
          }
     );*/
    });
  }



}
