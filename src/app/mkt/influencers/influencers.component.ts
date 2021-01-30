import { AfterViewInit,Component, OnInit, OnDestroy,ViewChild} from '@angular/core';
import {PopupInflComponent} from '../popup-infl/popup-infl.component';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ClientService } from '../../client.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { EditInflComponent } from '../edit-infl/edit-infl.component';

@Component({
  selector: 'app-influencers',
  templateUrl: './influencers.component.html',
  styleUrls: ['./influencers.component.css']
})
export class InfluencersComponent implements OnInit,AfterViewInit {
  
  infl = [];
  public displayedColumns = ['ID', 'Nombre', 'Apellido', 'Email','Telefono', 'id'];
  dataSource: MatTableDataSource<any>  = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public router: Router, private client: ClientService,public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.displayedColumns = ['ID', 'Nombre', 'Apellido', 'Email','Telefono', 'id'];
    this.cargarInfl();
    this.dataSource.data = this.infl;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
 
  cargarInfl() {
    this.client.get('influencer')
    .subscribe( data => {
      this.dataSource.data = data.data;
      this.infl = data.data;
     console.log(this.infl);

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
    dialogConfig.width = "700px"; 
    dialogConfig.height = "500px"; 
  
    dialogConfig.data = {
      id: 1,
      title: 'Influencers'
    };
    const dialogRef = this.dialog.open(PopupInflComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(JSON.stringify(result));
     
    });
  }

  editarInfl(a) {
    let id = a.id;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true; 
    dialogConfig.width = "700px"; 
    dialogConfig.height = "500px"; 
  
    dialogConfig.data = {
      id: 1,
      title: 'Editar Influencers',
      data: id
    };
    const dialogRef = this.dialog.open(EditInflComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(JSON.stringify(result));
      this.ngOnInit();
     
    });
  }

}
