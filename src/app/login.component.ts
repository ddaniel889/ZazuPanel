import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ClientService } from './client.service';

@Component({
    selector: 'app-login',
    template: `
        <form (ngSubmit)="onSubmit()">
            <mat-form-field appearance="">
                <mat-label>USUARIO</mat-label>
                <input matInput name="username" [(ngModel)]="username">
            </mat-form-field>
            <br />
            <mat-form-field appearance="">
                <mat-label>CLAVE</mat-label>
                <input matInput type="password" name="password" [(ngModel)]="password">
            </mat-form-field>
            <br />
            <button type="submit" mat-flat-button color="primary">INGRESAR</button>
        </form>
    `,
    styles: [`
        :host form {
            padding: 20px;
            max-width: 300px;
            margin:60px auto;
        }

        :host mat-form-field {
        w   h:100%;
        }
    `]
})
export class LoginComponent implements OnInit {

    @Input()  public username: string;
    @Input()  public password: string;
    @Output() public login   : EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private client: ClientService) { }

    ngOnInit(): void {
    }

    public onSubmit() {
        this.client.login(this.username, this.password).then((user) => {
            this.login.emit(user);
        });
    }
}
