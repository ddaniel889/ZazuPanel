import { AfterViewInit,Component, OnInit,OnDestroy,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../../client.service';
import {PopupBonComponent} from '../popup-bon/popup-bon.component';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import { EditBontComponent } from '../edit-bont/edit-bont.component';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-bonificaciones',
  templateUrl: './bonificaciones.component.html',
  styleUrls: ['./bonificaciones.component.css']
})
export class BonificacionesComponent implements OnInit,AfterViewInit {
  checked: boolean
  obj: any ;
  bon: any = [];
  public displayedColumns = ['Nombre', 'Desde', 'Hasta', 'Tipo','Valor','id'];
dataSource: MatTableDataSource<any>  = new MatTableDataSource();
@ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public router: Router, private client: ClientService,public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.displayedColumns = ['Nombre', 'Desde', 'Hasta', 'Tipo','Valor','id'];
    this.cargarBonificacion();
    this.dataSource.data = this.bon;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true; 
    dialogConfig.width = "700px"; 
    dialogConfig.height = "600px"; 
  
    dialogConfig.data = {
      id: 1,
      title: 'Bonificaciones Tiendas'
    };
    const dialogRef = this.dialog.open(PopupBonComponent,dialogConfig );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.ngOnInit();
    });
  }

  onChange(event) {
    console.log('onChange + valor de id', event);
    this.checked = event;
  
  }
  editBon(a) {
    let id = a.id;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true; 
    dialogConfig.width = "700px"; 
    dialogConfig.height = "600px"; 
  
    dialogConfig.data = {
      id: 1,
      title: 'Editar Bonificaciones de Tiendas',
      data: id
    };
    const dialogRef = this.dialog.open(EditBontComponent,dialogConfig );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.ngOnInit();
    });
  }

  cargarBonificacion() {
    this.client.get('bonificacion?limit=20')
    .subscribe( data => {
      this.dataSource.data = data.data;
      this.bon = data.data;
      this.obj = data.data;
     console.log(this.bon);
    }
    );
}

applyFilterapplyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

}
