import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../../client.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  obj: any ;
  public displayedColumns = ['Fecha', 'Hora,', 'Tienda', 'Cantidad','Importe.'];
  dataSource: MatTableDataSource<any>  = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public router: Router, private client: ClientService
  ) { }

  ngOnInit(): void {
    this.displayedColumns = ['Fecha', 'Hora,', 'Tienda', 'Cantidad','Importe.'];
    this.cargarPedidos();
    this.dataSource.data = this.obj;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  cargarPedidos() {
    this.client.get('pedido?limit=100')
    .subscribe( data => {
      this.dataSource.data = data.data;
      this.obj = data.data;
     console.log(this.obj);

    }
    );
}

exportPedidos() {
  this.client.get('pedido/exportar')
  .subscribe( data => {
   console.log(data);
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
