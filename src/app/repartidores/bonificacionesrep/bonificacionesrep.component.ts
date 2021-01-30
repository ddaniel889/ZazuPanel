import { AfterViewInit,Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../../client.service';
import {PopupBonrepartComponent} from '../popup-bonrepart/popup-bonrepart.component';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { EditBonrComponent } from '../edit-bonr/edit-bonr.component';


@Component({
  selector: 'app-bonificacionesrep',
  templateUrl: './bonificacionesrep.component.html',
  styleUrls: ['./bonificacionesrep.component.css']
})
export class BonificacionesrepComponent implements OnInit,AfterViewInit {
  checked:boolean
  obj: any ;
  bon: any = [];
  public displayedColumns = ['Nombre Bonificación', 'Desde', 'Hasta', 'Tipo de Descuento','Valor de Descuento','id'];
dataSource: MatTableDataSource<any>  = new MatTableDataSource();
@ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public router: Router, private client: ClientService,public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.displayedColumns = ['Nombre Bonificación', 'Desde', 'Hasta', 'Tipo de Descuento','Valor de Descuento','id'];
    this.cargarBonRep();
    this.dataSource.data = this.bon;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  cargarBonRep() {
    this.client.get('bonificacion-repartidor?limit=20')
    .subscribe( data => {
      this.obj = data.data;
      this.dataSource.data = data.data;
      this.bon = data.data;
     console.log(this.obj);

    }
    );
}

onChange(event) {
  console.log('onChange + valor de id', event);
  this.checked = event;

}

openDialog() {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true; 
  dialogConfig.width = "700px"; 
  dialogConfig.height = "550px"; 
  
  dialogConfig.data = {
    id: 1,
    title: 'Bonificacion Repartidor'
  };

  const dialogRef = this.dialog.open(PopupBonrepartComponent,dialogConfig );

  dialogRef.afterClosed().subscribe(result => {
    console.log(result);
    console.log(JSON.stringify(result));
    //llamado a servicio
   
  });
}

editBon() {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true; 
  dialogConfig.width = "700px"; 
  dialogConfig.height = "550px"; 
  
  dialogConfig.data = {
    id: 1,
    title: ' Editar Bonificacion Repartidor'
  };

  const dialogRef = this.dialog.open(EditBonrComponent,dialogConfig );

  dialogRef.afterClosed().subscribe(result => {
    console.log(JSON.stringify(result));
    this.ngOnInit();
    
  });
}

applyFilterapplyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}




}
