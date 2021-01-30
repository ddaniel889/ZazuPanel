import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-detail-lrepart',
  templateUrl: './detail-lrepart.component.html',
  styleUrls: ['./detail-lrepart.component.css']
})
export class DetailLRepartComponent implements OnInit {
  id:string;
  repart:any;

  constructor(
    private  actRoute: ActivatedRoute, private router: Router,private client: ClientService
  ) { }

  ngOnInit(): void {
    this.id = this.actRoute.snapshot.params['id'];
    console.log(this.id);
    this.edit('repartidor/liquidacion/',this.id);
  }

   edit(url,id) {
    this.client.getId(url,id)
    .subscribe( data => {
      this.repart = data;
      console.log(this.repart);  
    });
}

}
