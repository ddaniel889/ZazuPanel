import { AfterViewInit,Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../../client.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit,AfterViewInit {
  checked:boolean;
  id:string;
  userTienda = [];
  user = [];
  title : any;
  public displayedColumns = ['Nombre', 'Usuario', 'E-mail', 'Rol','id'];
dataSource: MatTableDataSource<any>  = new MatTableDataSource();
@ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private  actRoute: ActivatedRoute, private router: Router,private client: ClientService) { }

  ngOnInit(): void {
    this.displayedColumns = ['Nombre', 'Usuario', 'E-mail', 'Rol', 'id'];
    this.id = this.actRoute.snapshot.params['id'];
    this.edit('comercio/',this.id);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onChange(event) {
    console.log('onChange', event);
    this.checked = event;
  
  }

  cargarComercios() {
    this.client.get('comercio')
    .subscribe( data => {
      //this.dataSource.data = data.data;
      this.userTienda = data;
     console.log(this.userTienda);
    }
    );
}


edit(url,id) {
  this.client.getId(url,id)
  .subscribe( data => {
    this.title = data.nombre;
    this.user = data.personas;
    this.dataSource.data = this.user;
   console.log(this.user);

  }
  );
}

/* datos de repartidor data.personas, data.id, data.apellidos, data.nombre, data.telefono, data.telefono, data.transporte.repartidor_id,data.transporte.tipo_transporte_nombre                 */


//datos de repartidor

/*


  


*/

}
