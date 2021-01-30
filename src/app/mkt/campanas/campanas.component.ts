import { Component, OnInit,OnDestroy,ViewChild } from '@angular/core';
import {PopupCampComponent} from '../popup-camp/popup-camp.component';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ClientService } from '../../client.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { EditCampComponent } from '../edit-camp/edit-camp.component';

@Component({
  selector: 'app-campanas',
  templateUrl: './campanas.component.html',
  styleUrls: ['./campanas.component.css']
})
export class CampanasComponent implements OnInit {
  camp = [];
  public displayedColumns = ['ID', 'Descripcion', 'Tienda', 'Producto','Red', 'Influencer','id'];
  dataSource: MatTableDataSource<any>  = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public router: Router, private client: ClientService,public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.displayedColumns = ['ID', 'Descripcion', 'Tienda', 'Producto','Red', 'Influencer','id'];
    this.cargarCamp();
    this.dataSource.data = this.camp;

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
 
  cargarCamp() {
    this.client.get('campanna')
    .subscribe( data => {
      this.dataSource.data = data.data;
      this.camp = data.data;
     console.log(this.camp);

    }
    );
}


  openDialog() {
    const dialogRef = this.dialog.open(PopupCampComponent,{
      height: '700px',
      width: '700px',
    } );

    dialogRef.afterClosed().subscribe(result => {
      //console.log(JSON.stringify(result));
      console.log(result);
    });
  }

  editCamp() {
    const dialogRef = this.dialog.open(EditCampComponent,{
      height: '700px',
      width: '700px',
    } );

    dialogRef.afterClosed().subscribe(result => {
      //console.log(JSON.stringify(result));
      console.log(result);
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
   /* if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }*/
  }

}
