import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
    selector: 'app-repartidor-listado',
    template: `
        <app-listado 
            [dataUri]="'/repartidor'" 
            [columns]="columns"
        ></app-listado>
    `,
    styles: [''],
})
export class RepartidorListadoComponent implements OnInit {
    
    @ViewChild('menu') menu: MatMenuTrigger;

    public columns = [
        { name: 'id',         title: '#'      ,  width: '80'},
        { name: 'nombre',     title: 'Nombre',   width: '',    evaluate: (row: any) => { return row.persona.nombre + ' ' + row.persona.apellidos; } },
        { name: 'correo',     title: 'e-Mail',   width: '',    evaluate: (row: any) => { return row.persona.correo }},
        { name: 'transporte', title: 'Vehículo', width: '120', evaluate: (row: any) => { return row.transporte.tipo_transporte_nombre }},
        { name: 'dominio',    title: 'Dominio',  width: '120', evaluate: (row: any) => { return row.transporte.dominio }},
        { name: 'estado',     title: 'Estado',   width: '120'},
        { name: '_',          title: '',         width: '20', type:'button', icon: 'edit', onClick:(row: any) => {
            
        }}
    ];
    
    public displayedColumns = ['id', 'nombre', 'correo', 'estado'];
    
    constructor() {
        
    }

    ngOnInit(): void {
        
    }
}
