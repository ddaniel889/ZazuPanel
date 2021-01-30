import { AfterViewInit,Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../../client.service';
import {PopupTiporepartComponent} from '../popup-tiporepart/popup-tiporepart.component';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-tipos-repartidores',
  templateUrl: './tipos-repartidores.component.html',
  styleUrls: ['./tipos-repartidores.component.css']
})
export class TiposRepartidoresComponent implements OnInit,AfterViewInit {
  obj: any ;
  tipos: any = [];
  public displayedColumns = ['ID','Tipo de Repartidor','id'];
dataSource: MatTableDataSource<any>  = new MatTableDataSource();
@ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public router: Router, private client: ClientService,public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.displayedColumns = ['ID','Tipo de Repartidor','id'];
    this.cargarRepart();
    this.dataSource.data = this.tipos;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  cargarRepart() {
    this.client.get('repartidor')
    .subscribe( data => {
      this.dataSource.data = data.data;
      this.tipos = data.data;
      this.obj = data.data;
     console.log(this.tipos);

    }
    );
}

openDialog() {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true; 

  dialogConfig.width = "600px"; 
  dialogConfig.height = "400px"; 
  dialogConfig.data = {
    id: 1,
    title: 'Tipo Repartidores'
  };
  const dialogRef = this.dialog.open(PopupTiporepartComponent,dialogConfig);

  dialogRef.afterClosed().subscribe(result => {
    console.log(JSON.stringify(result));
    // llamado al servicio
   /* this.client.post('comercio', result).subscribe((data)=> {
      console.log(data);
      this.router.navigateByUrl('/repartidores/repartidores');
        },
        error => {
          console.log(error);
        }
   );*/
  });
}

borrar(id) {
  this.client.delete('repartidor/',id).subscribe(data => {
   this.ngOnInit();
    },
    error => {
      console.log(error);
   
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
