import {  AfterViewInit,Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../../client.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddTarifasComponent } from '../add-tarifas/add-tarifas.component';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { EditTarifasComponent } from '../edit-tarifas/edit-tarifas.component';

@Component({
  selector: 'app-tarifas',
  templateUrl: './tarifas.component.html',
  styleUrls: ['./tarifas.component.css']
})
export class TarifasComponent implements OnInit, AfterViewInit {
  obj: any ;
  tarifa: any = [];
  public displayedColumns = ['Nombre Tarifa', 'Detalle', 'Valor', 'Comisión','id'];
dataSource: MatTableDataSource<any>  = new MatTableDataSource();
@ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public router: Router, private client: ClientService,public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.displayedColumns = ['Nombre Tarifa', 'Detalle', 'Valor', 'Comisión','id'];
    this.cargarTarifa();
    this.dataSource.data = this.tarifa;
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  openDialog() {
    const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true; 
  dialogConfig.width = "600px"; 
  dialogConfig.height = "460px"; 

  dialogConfig.data = {
    id: 1,
    title: 'tarifas'
  };
    const dialogRef = this.dialog.open(AddTarifasComponent,dialogConfig );
    dialogRef.afterClosed().subscribe(result => {
      console.log(JSON.stringify(result));
      this.client.post('tarifa', result).subscribe((data)=> {
        console.log(data);
        this.ngOnInit();
        this.router.navigateByUrl('/tiendas/tarifas');
          },
          error => {
            console.log(error);
          }
     );
    });
  }

  editTarifas(a) {
    let id = a.id;
    const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true; 
  dialogConfig.width = "600px"; 
  dialogConfig.height = "460px"; 

  dialogConfig.data = {
    id: 1,
    title: 'Editar tarifas',
    data: id
  };
    const dialogRef = this.dialog.open(EditTarifasComponent,dialogConfig );
    dialogRef.afterClosed().subscribe(result => {
      console.log(JSON.stringify(result));
      this.ngOnInit();
    });
  }

  cargarTarifa() {
    this.client.get('tarifa?limit=20')
    .subscribe( data => {
      this.dataSource.data = data.data;
      this.tarifa = data.data;
     console.log(this.tarifa);

    }
    );
}

applyFilterapplyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

borrar(id) {
  this.client.delete('tarifa/',id).subscribe(data => {
   this.ngOnInit();

    },
    error => {
      console.log(error);
   
    }
);
  }

}
