import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort      } from '@angular/material/sort';
import { MatTable     } from '@angular/material/table';
import { ListadosDataSource } from '../../listados-datasource';

@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css']
})
export class ListadoPersonasComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator : MatPaginator;
  @ViewChild(MatSort     ) sort      : MatSort;
  @ViewChild(MatTable    ) table     : MatTable<any>;
  dataSource: ListadosDataSource<any>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  public constructor(dataSource: ListadosDataSource<any>) {
    this.dataSource = dataSource;
    this.dataSource.dataUri = 'mission';
  }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
