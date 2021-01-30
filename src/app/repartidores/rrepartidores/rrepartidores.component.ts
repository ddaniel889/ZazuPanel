import { AfterViewInit,Component, OnInit, OnDestroy,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../../client.service';
import {PopupRepartComponent} from '../popup-repart/popup-repart.component';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-rrepartidores',
  templateUrl: './rrepartidores.component.html',
  styleUrls: ['./rrepartidores.component.css']
})
export class RrepartidoresComponent implements OnInit {
  checked:boolean
  obj: any ;
  depart: any = [];
  public displayedColumns = ['ID Repartidor', 'Nombre',/* 'Apellidos',*/ 'Telefono','Tipo','Vehículo', 'Patente', 'a'];
dataSource: MatTableDataSource<any>  = new MatTableDataSource();
@ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public router: Router, private client: ClientService,public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.displayedColumns = ['ID Repartidor', 'Nombre',/* 'Apellidos',*/ 'Telefono','Tipo','Vehículo', 'Patente', 'a'];
    this.cargarRepart();
    this.dataSource.data = this.depart;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  onChange(event) {
    console.log('onChange + valor de id', event);
    this.checked = event;
  
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true; 
    dialogConfig.width = "850px"; 
    dialogConfig.height = "700px"; 
    dialogConfig.data = {
      id: 1,
      title: 'Repartidores'
    };
    const dialogRef = this.dialog.open(PopupRepartComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.ngOnInit();
   
    });
  }


  cargarRepart() {
    this.client.get('repartidor')
    .subscribe( data => {
      this.obj = data.data;
      this.dataSource.data = data.data;
      this.depart = data.data;
     console.log(this.depart);

    }
    );
}

applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();

  
}

}
