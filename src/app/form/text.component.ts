import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-form-text',
    template: `
        <mat-form-field appearance="fill">
            <mat-label>{{label}}</mat-label>
            <input matInput>
        </mat-form-field>
    `,
    styles: [`
        mat-form-field { width: 100% }
    `]
})
export class FormTextComponent implements OnInit {

    @Input() public label: string;

    constructor() { }

    ngOnInit(): void {
    }

}
