import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
    selector: 'app-root',
    template: `
    <app-login *ngIf="!isLoggedIn" (login)="onLogin()">
    </app-login>
    <app-navigation *ngIf="isLoggedIn" (logout)="onLogout()">
    <router-outlet></router-outlet>
    </app-navigation>
    `,
    styles: [`
        mat-card {
            margin:10px;
        }
    `]
})
export class AppComponent implements OnInit {
    
    public title = 'panel-angular';
    public isLoggedIn = false;

    public constructor(private authService: AuthService) {
        
    }

    public onLogin() {
        this.checkLogin();
    }

    public onLogout() {
        this.authService.logout();
        this.checkLogin();
    }

    public ngOnInit(): void {
        this.checkLogin();
    }

    protected checkLogin() {
        this.isLoggedIn = this.authService.isLoggedIn();
    }
}
