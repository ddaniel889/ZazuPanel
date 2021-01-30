import { AfterViewInit,Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../../client.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddcategoriasComponent } from '../../addcategorias/addcategorias.component';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { EditCatComponent } from '../../tiendas/edit-cat/edit-cat.component';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit,AfterViewInit {
  checked: boolean;
  obj: any ;
  cat: any = [];
  public displayedColumns = ['Nombre','Descripción','id'];
dataSource: MatTableDataSource<any>  = new MatTableDataSource();
@ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public router: Router, private client: ClientService,public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.displayedColumns = ['Nombre','Descripción','id'];
    this.cargarCategoria();
    this.dataSource.data = this.cat;
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
  dialogConfig.width = "600px"; 
  dialogConfig.height = "400px"; 

  dialogConfig.data = {
    id: 1,
    title: 'categorias'
  };
    const dialogRef = this.dialog.open(AddcategoriasComponent,dialogConfig );
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(JSON.stringify(result));
      this.client.post('categoria-comercio?limit=50', result).subscribe((data)=> {
        console.log(data);
        this.router.navigateByUrl('/tiendas/categorias');
          },
          error => {
            console.log(error);
          }
     );
    });
  }

  editCat(a) {
    let id = a.id;
    const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true; 
  dialogConfig.width = "600px"; 
  dialogConfig.height = "400px"; 

  dialogConfig.data = {
    id: 1,
    title: 'Editar Categorias',
    data: id
  };
    const dialogRef = this.dialog.open(EditCatComponent,dialogConfig );
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(JSON.stringify(result));
      this.ngOnInit();
    });
  }

  cargarCategoria() {
    this.client.get('categoria-comercio')
    .subscribe( data => {
     this.dataSource.data = data.data;
      this.cat = data.data;
     console.log(this.cat);

    }
    );
}

applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}



}
