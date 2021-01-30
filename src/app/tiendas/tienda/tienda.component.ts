import { AfterViewInit,Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ClientService } from '../../client.service';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { AddTiendasComponent } from '../add-tiendas/add-tiendas.component';


@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit,AfterViewInit {

  checked:boolean
  obj: any ;
  tienda: any = [];
  

 
public displayedColumns = ['Nombre Tienda', 'Categoría', 'Localidad', 'Logística','Plan','id'];
dataSource: MatTableDataSource<any>  = new MatTableDataSource();
@ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public router: Router, private client: ClientService,public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.displayedColumns = ['Nombre Tienda', 'Categoría', 'Localidad', 'Logística','Plan','id'];
    this.cargarComercios();
    this.dataSource.data = this.tienda;
    this.openDialog();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  public clickUser(): void {

    this.router.navigate(['/comercio/agregar']);
}

  cargarComercios() {
    this.client.get('comercio?limit=50')
    .subscribe( data => {
      this.dataSource.data = data.data;
      this.tienda = data.data;
     console.log(this.tienda);
    }
    );
}

applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();

 /* if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }*/
}

openDialog() {
  const dialogConfig = new MatDialogConfig();
dialogConfig.disableClose = true;
dialogConfig.autoFocus = true; 
dialogConfig.width = "800px"; 
dialogConfig.height = "800px"; 

dialogConfig.data = {
  id: 1,
  title: 'Agregar Comercio'
};
  const dialogRef = this.dialog.open(AddTiendasComponent ,dialogConfig );
  dialogRef.afterClosed().subscribe(result => {
    console.log(JSON.stringify(result));
 
  });
}

onChange(event) {
  console.log( event);
  this.checked = event;


}
 

}


