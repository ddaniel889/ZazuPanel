import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  checked: boolean;
  repart:any;
  cliente:any;
  tienda:any;

  constructor(private client: ClientService) { }

  ngOnInit(): void {
    this.cargarTienda();
    this.cargarRepart();
    this.cargarClient();

  }

  cargarTienda() {
    this.client.get('comercio')
    .subscribe( data => {
      this.tienda = data;
     console.log(this.tienda);
    }
    );
}

cargarRepart() {
  this.client.get('repartidor')
  .subscribe( data => {
    this.repart = data;
   console.log(this.repart);
  }
  );
}

cargarClient() {
  this.client.get('persona')
  .subscribe( data => {
    this.cliente = data;
   console.log(this.cliente);
  }
  );
}

}
