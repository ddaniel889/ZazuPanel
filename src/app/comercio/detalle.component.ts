import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comercio-detalle',
  template: `
    <app-comercio-form-general *ngIf="id" [id]="id"></app-comercio-form-general>
  `,
  styles: [
  ]
})
export class ComercioDetalleComponent implements OnInit {

    public id: number;

    constructor(
        public route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe((data: any) => {
            this.id = data.params.id;
        });
    }

}
