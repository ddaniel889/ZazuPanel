import { AfterViewInit,Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ClientService } from '../../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tiendas',
  templateUrl: './tiendas.component.html',
  styleUrls: ['./tiendas.component.css']
})
export class TiendasComponent implements OnInit,AfterViewInit {
  tienda = [];
  public displayedColumns = ['Id', 'Fecha', 'Nombre', 'Plan','Importe', 'Total','Estado','id'];
  dataSource: MatTableDataSource<any>  = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public router: Router, private client: ClientService
  ) { }

  ngOnInit(): void {
    this.displayedColumns = ['Id', 'Fecha', 'Nombre', 'Plan','Importe', 'Total','Estado','id'];
    this.cargarTienda();
    this.dataSource.data = this.tienda;

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
 
  cargarTienda() {
    this.client.get('comercio/liquidacion?limit=50')
    .subscribe( data => {
      this.dataSource.data = data.data;
      this.tienda = data.data;
     console.log(this.tienda);

    }
    );
}


applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
}



}
