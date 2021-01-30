import { AfterViewInit,Component, OnInit,OnDestroy,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../../client.service';
import {PopupTipovehComponent} from '../popup-tipoveh/popup-tipoveh.component';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { EditVehComponent } from '../edit-veh/edit-veh.component';

@Component({
  selector: 'app-tipos-vehiculos',
  templateUrl: './tipos-vehiculos.component.html',
  styleUrls: ['./tipos-vehiculos.component.css']
})
export class TiposVehiculosComponent implements OnInit,AfterViewInit {
  checked: boolean
  obj: any ;
  tipos: any = [];
  public displayedColumns = ['ID Tipo de Vehículos','Descripción','id'];
dataSource: MatTableDataSource<any>  = new MatTableDataSource();
@ViewChild(MatPaginator) paginator: MatPaginator;
  
constructor(
    public router: Router, private client: ClientService,public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.displayedColumns = ['ID Tipo de Vehículos','Descripción','id'];
    this.cargarTipovh();
    this.dataSource.data = this.tipos;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  cargarTipovh() {
    this.client.get('tipo-transporte')
    .subscribe( data => {
      this.dataSource.data = data.data;
      this.tipos = data.data;
      this.obj = data.data;
     console.log(this.tipos);

    }
    );
}

borrar(id) {
  this.client.delete('tipo-transporte/',id).subscribe(data => {
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
  dialogConfig.data = {
  id: 1,
  title: 'Tipos Vehículos'
};
  const dialogRef = this.dialog.open(PopupTipovehComponent,dialogConfig );
  dialogRef.afterClosed().subscribe(result => {
    console.log(JSON.stringify(result));
    let objetc = result;
  });
}

editVeh(a) {
  let id = a
  console.log(id);
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;   
  dialogConfig.data = {
  id: 1,
  title: 'Editar Tipos Vehículos',
  data: id
};
  const dialogRef = this.dialog.open(EditVehComponent,dialogConfig );
  dialogRef.afterClosed().subscribe(result => {
    console.log(JSON.stringify(result));
    this.ngOnInit();
  });
}

onChange(event) {
  console.log('onChange + valor de id', event);
  this.checked = event;

}

}
