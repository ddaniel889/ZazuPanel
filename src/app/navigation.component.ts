import { Component, Output, EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
    selector: 'app-navigation',
    template: `
        <mat-sidenav-container class="sidenav-container">
        <mat-sidenav #drawer class="sidenav" fixedInViewport
            [attr.role]="(isHandset$ | async) ? 'dialog' : 'navigation'"
            [mode]="(isHandset$ | async) ? 'over' : 'side'"
            [opened]="(isHandset$ | async) === false">
        <mat-toolbar class="tool"> <img src="./assets/img/logo.png" alt="user" />Hola Admin</mat-toolbar>
        <mat-nav-list class="sidenav-list">
           <a mat-list-item href="#" routerLink="/dashboard" routerLinkActive="active"><mat-icon aria-hidden="false" aria-label="" class="ico">personal_video</mat-icon> <span class='subtitle'>Dashboard</span></a>
           <hr class="hre">
           <a mat-list-item href="#" routerLink="/tiendas/tienda"><mat-icon aria-hidden="false" aria-label="" class="ico">store</mat-icon><span class='subtitle'>Tiendas</span></a>
           <a mat-list-item href="#" routerLink="/tiendas/tienda"><span class='anchor'>Tienda</span></a>
           <a mat-list-item href="#" routerLink="/tiendas/categorias" routerLinkActive="active"><span class='anchor'>Categorías</span></a>
           <a mat-list-item href="#" routerLink="/tiendas/tarifas"><span class='anchor'>Tarifas</span></a>
           <a mat-list-item href="#" routerLink="/tiendas/bonificaciones" routerLinkActive="active"><span class='anchor'>Bonificaciones</span></a>
           <hr class="hre">
            <a mat-list-item href="#" routerLink="/repartidores/rrepartidores"><mat-icon aria-hidden="false" aria-label="" class="ico">directions_bike</mat-icon><span class='subtitle'>Repartidores</span></a>
            <a mat-list-item href="#" routerLink="/repartidores/rrepartidores"><span class='anchor'>Repartidor</span></a>
            <a mat-list-item href="#" routerLink="/repartidores/repartidores" routerLinkActive="active"><span class='anchor'>Tipos de repartidores</span></a>
            <a mat-list-item href="#" routerLink="/repartidores/vehiculos"><span class='anchor'>Tipos de vehículos</span></a>
            <a mat-list-item href="#" routerLink="/repartidores/tarifas"><span class='anchor'>Tarifas</span></a>
            <a mat-list-item href="#" routerLink="/repartidores/bonificaciones" routerLinkActive="active"><span class='anchor'>Bonificaciones</span></a>
            <hr class="hre">
            <a mat-list-item href="#" routerLink="/productos/categorias"><mat-icon aria-hidden="false" aria-label="" class="ico">local_grocery_store</mat-icon><span class='subtitle'>Productos</span></a>
            <a mat-list-item href="#" routerLink="/productos/categorias"><span class='anchor'>Categorías</span></a>
            <hr class="hre">
            <a mat-list-item href="#" routerLink="/liquidaciones/tiendas"><mat-icon aria-hidden="false" aria-label="" class="ico">attach_money</mat-icon><span class='subtitle'>Liquidaciones</span></a> 
            <a mat-list-item href="#" routerLink="/liquidaciones/tiendas"><span class='anchor'>Tiendas</span></a>
            <a mat-list-item href="#" routerLink="/liquidaciones/repartidores"><span class='anchor'>Repartidores</span></a>
            <hr class="hre">
            <a mat-list-item href="#" routerLink="/mkt/campanas"><mat-icon aria-hidden="false" aria-label="" class="ico">loyalty</mat-icon><span class='subtitle'>MKT Digital</span> </a>
            <a mat-list-item href="#" routerLink="/mkt/campanas"><span class='anchor'>Campañas</span></a>
            <a mat-list-item href="#" routerLink="/mkt/influencers"><span class='anchor'>Influencers</span></a>
            <hr class="hre">
            <a mat-list-item href="#" routerLink="/reportes/pedidos"><mat-icon aria-hidden="false" aria-label="" class="ico">layers</mat-icon><span class='subtitle'>Reportes</span> </a> 
            <a mat-list-item href="#" routerLink="/reportes/pedidos"><span class='anchor'>Pedidos</span></a>
            <a mat-list-item href="#" routerLink="/reportes/envios"><span class='anchor'>Envíos</span></a>
            <a mat-list-item href="#" routerLink="/reportes/reportesca"><span class='anchor'>Campañas</span></a>
            <hr class="hre">
            <!--a mat-list-item href="#" routerLink="/comercio/listado"><span class='anchor'>Comercios</span></a>
            <a mat-list-item href="#" routerLink="/repartidor/listado">Motoqueros</a>
            <a mat-list-item href="#">Productos </a>
            <a mat-list-item href="#">Pedidos</a>
            <a mat-list-item href="#">Envios</a>
            <a mat-list-item href="#">Cobranzas</a>
            <hr-->
            <a mat-list-item href="#" (click)="clickSalir()"><mat-icon aria-hidden="false" aria-label="" class="ico">power_settings_new</mat-icon><span class='subtitle'>Salir</span></a>   
            <hr class="hre">
        </mat-nav-list>
        </mat-sidenav>
        <mat-sidenav-content>
        <!--mat-toolbar color="primary">
            <button
            type="button"
            aria-label="Toggle sidenav"
            mat-icon-button
            (click)="drawer.toggle()"
            *ngIf="isHandset$ | async">
            <mat-icon aria-label="Side nav toggle icon">Panel</mat-icon>
            </button>
            <span>Zazu</span>
        </mat-toolbar-->
        <ng-content></ng-content>
        </mat-sidenav-content>
    </mat-sidenav-container>  
    `,
    styles: [`
        .sidenav-container {
            height: 100%;
        }
        
        .sidenav {
            width: 200px;
        }
        
        .sidenav .mat-toolbar {
            background-color: #18D2CD;
        }

        .sidenav mat-nav-list {
            background-color: #616266 !important;
        }
        
        
        .mat-toolbar.mat-primary {
            position: sticky;
            top: 0;
            z-index: 1;
        }
        sidenav-list {
            background-color: pink !important;
        }
        .tool {
            color: white;
        }
        .anchor {
            margin-left: 46px !important;
        }
        .subtitle {
            margin-left: 10px !important;
        }

        a {
            color: white !important;
            font-size: 13px !important;
        }
        .hre {
            border: #F6F1F0 0.2px solid !important;
        }

        .ico {
            color:#EEE338;
        }
      
    `]
})
export class NavigationComponent {

    @Output() public logout: EventEmitter<void> = new EventEmitter<void>();

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
        map(result => result.matches),
        shareReplay()
    );

    constructor(
        private breakpointObserver: BreakpointObserver,
    ) {}

    public clickSalir(): void {
        console.log('clickSalir');
        this.logout.emit();
    }


}
