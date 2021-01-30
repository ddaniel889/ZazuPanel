import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-comercio-agregar',
    template: `
        <app-comercio-form-general (onCreated)="onCreated($event)"></app-comercio-form-general>
    `,
    styles: [
    ]
})
export class ComercioAgregarComponent implements OnInit {    

    constructor(
        public router: Router,
    ) { }

    ngOnInit(): void {

    }

    public onCreated(data: any) {
        // this.router.navigate(['/comercio/detalle/' + data.id]);
    }

}
