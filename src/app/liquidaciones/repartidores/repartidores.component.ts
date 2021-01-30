import { AfterViewInit,Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ClientService } from '../../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repartidores',
  templateUrl: './repartidores.component.html',
  styleUrls: ['./repartidores.component.css']
})
export class RepartidoresComponent implements OnInit,AfterViewInit {
  repart = [];
  public displayedColumns = ['Id', 'Fecha', 'Nombre', 'Importe', 'Estado','id'];
  dataSource: MatTableDataSource<any>  = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public router: Router, private client: ClientService
  ) { }

  ngOnInit(): void {
    this.displayedColumns = ['Id', 'Fecha', 'Nombre', 'Importe', 'Estado','id'];
    this.cargarRepart();
    this.dataSource.data = this.repart;
  }

  cargarRepart() {
    this.client.get('repartidor/liquidacion?limit=50')
    .subscribe( data => {
      this.dataSource.data = data.data;
      this.repart = data.data;
     console.log(this.repart);

    }
    );
}

applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
 

}
