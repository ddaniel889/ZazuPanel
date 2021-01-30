import { AfterViewInit,Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../../client.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-envios',
  templateUrl: './envios.component.html',
  styleUrls: ['./envios.component.css']
})
export class EnviosComponent implements OnInit,AfterViewInit {
  obj: any ;
  envio = [];
  public displayedColumns = ['Fecha', 'Hora,', 'Repartidor', 'Importe.'];
  dataSource: MatTableDataSource<any>  = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public router: Router, private client: ClientService
  ) { }

  ngOnInit(): void {
    this.displayedColumns = ['Fecha', 'Hora,', 'Repartidor', 'Importe.'];
    this.cargarEnvios();
    this.dataSource.data = this.envio;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  cargarEnvios() {
    this.client.get('envio?limit=100')
    .subscribe( data => {
      this.dataSource.data = data.data;
      this.envio = data.data;
     console.log(this.envio);

    }
    );
}

exportEnvios() {
  this.client.get('envio/exportar')
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
