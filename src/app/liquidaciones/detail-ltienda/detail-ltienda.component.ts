import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-detail-ltienda',
  templateUrl: './detail-ltienda.component.html',
  styleUrls: ['./detail-ltienda.component.css']
})
export class DetailLTiendaComponent implements OnInit {
  id:string;
  detail:any;
  comercio:any;
  personas: any;

  constructor(
    private  actRoute: ActivatedRoute, private router: Router,private client: ClientService
  ) { }

  ngOnInit(): void {
    this.id = this.actRoute.snapshot.params['id'];
    console.log('valor de id'+this.id);
    this.edit('comercio/liquidacion/',this.id);
  }

  edit(url,id) {
    this.client.getId(url,id)
    .subscribe( data => {
      this.detail = data;
      this.comercio = data.comercio;
      console.log(this.detail);
      console.log(this.comercio);
      this.personas = data.comercio.personas;
      console.log(data.comercio.personas);
    });
}



}
