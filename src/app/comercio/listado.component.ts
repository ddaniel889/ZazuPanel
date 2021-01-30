import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
    selector: 'app-comercio-listado',
    template: `
        <app-listado 
            [dataUri]="'/comercio'" 
            [columns]="columns"
            [routeForAdd]="'/comercio/agregar'"
        ></app-listado>
    `,
    styles: [''],
})
export class ComercioListadoComponent implements OnInit {
    
    @ViewChild('menu') menu: MatMenuTrigger;

    public columns = [
        { name: 'id',         title: '#'      ,  width: '80'},
        { name: 'nombre',     title: 'Nombre',   width: ''  },
        { name: 'estado',     title: 'Estado',   width: '120'},
        { name: '_',          title: '',         width: '20', type:'button', icon: 'edit', onClick:(row: any) => {
            this.router.navigate(['/comercio/detalle/' + row.id]);
        }}
    ];
    
    public displayedColumns = ['id', 'nombre', 'correo', 'estado'];
    
    constructor(
        public router: Router,
    ) {
        
    }

    ngOnInit(): void {
        
    }
}
