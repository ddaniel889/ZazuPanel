import { AfterViewInit,Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../../client.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { AdProductosComponent } from '../ad-productos/ad-productos.component';
import { ECatComponent } from '../e-cat/e-cat.component';


@Component({
  selector: 'app-categoriasprod',
  templateUrl: './categoriasprod.component.html',
  styleUrls: ['./categoriasprod.component.css']
})
export class CategoriasprodComponent implements OnInit,AfterViewInit {
  obj: any ;
  cat: any = [];
  public displayedColumns = ['ID Categoría', 'Detalle', 'id'];
  checked: boolean;
dataSource: MatTableDataSource<any>  = new MatTableDataSource();
@ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public router: Router, private client: ClientService,public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.displayedColumns = ['ID Categoría', 'Detalle', 'id'];
    this.cargarCatProd();
    this.dataSource.data = this.cat;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  cargarCatProd() {
    this.client.get('producto/categoria?limit=50')
    .subscribe( data => {
      this.dataSource.data = data.data;
      this.cat = data.data;
      this.obj = data.data;
     console.log(this.cat);

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
  title: 'categorias'
};
  const dialogRef = this.dialog.open(AdProductosComponent,dialogConfig );

  dialogRef.afterClosed().subscribe(result => {
    console.log(JSON.stringify(result));
    this.ngOnInit();
  
  });
}

onChange(event,a) {
  console.log('onChange', event,a);
  this.checked = event;

}
editCat() {
  const dialogConfig = new MatDialogConfig();
dialogConfig.disableClose = true;
dialogConfig.autoFocus = true; 
dialogConfig.width = "600px"; 
dialogConfig.height = "400px"; 

dialogConfig.data = {
  id: 1,
  title: 'Editar Categorias'
};
  const dialogRef = this.dialog.open(ECatComponent,dialogConfig);
  dialogRef.afterClosed().subscribe(result => {
    console.log(JSON.stringify(result));
    this.ngOnInit();
  });
}


}
