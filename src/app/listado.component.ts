import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator       } from '@angular/material/paginator';
import { MatSort            } from '@angular/material/sort';
import { MatTable           } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable         } from 'rxjs';
import { ListadosDataSource } from './listados-datasource';

@Component({
    selector: 'app-listado',
    template: `
        <div class="mat-elevation-z8"> 
        <mat-toolbar>
            <form (ngSubmit)="submitSearch()">
                <mat-form-field>
                    <input matInput placeholder="" name="searchText" [(ngModel)]="searchText">
                </mat-form-field>
                <button *ngIf="!filtered" mat-icon-button color="primary" type="submit">
                    <mat-icon aria-hidden="false" aria-label="Search">search</mat-icon>
                </button>
                <button *ngIf="filtered" mat-icon-button color="primary" (click)="clickClearFilter()">
                    <mat-icon aria-hidden="false" aria-label="Search">clear</mat-icon>
                </button>
            </form>
            <button mat-mini-fab color="accent" (click)="clickAdd()">
                <mat-icon aria-hidden="false" aria-label="add">add</mat-icon>
            </button>
        </mat-toolbar>
        <table mat-table class="full-width-table" matSort aria-label="Elements">
            <ng-container *ngFor="let column of columns" matColumnDef="{{column.name}}">
                <th mat-header-cell *matHeaderCellDef mat-sort-header  width="{{column.width?column.width:''}}">{{column.title}}</th>
                <td mat-cell *matCellDef="let row">
                    <ng-container *ngIf="(column.type||'text')==='text'">{{column.evaluate?column.evaluate(row):row[column.name]}}</ng-container>
                    <ng-container *ngIf="(column.type||'text')==='button'">
                        <button mat-icon-button color="primary" (click)="(column.onClick||'')(row)">{{column.text||''}}
                            <mat-icon aria-hidden="false" aria-label="Search">{{column.icon}}</mat-icon>
                        </button>
                    </ng-container>
                </td>
            </ng-container>

            <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
            <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
        </table>

        <mat-paginator #paginator
            [length]="dataSource?.data.length"
            [pageIndex]="0"
            [pageSize]="50"
            [pageSizeOptions]="[5, 10, 25, 50, 100, 250]">
        </mat-paginator>
    </div>`,
    styles: [`
        :host { display: block; }
        .full-width-table { width: 100%; }
    `]
  })
  export class ListadoComponent implements AfterViewInit, OnInit {

    @ViewChild(MatPaginator) paginator : MatPaginator;
    @ViewChild(MatSort     ) sort      : MatSort;
    @ViewChild(MatTable    ) table     : MatTable<any>;

    public searchText: string;
    public filtered: boolean;
    @Input() public columns: Array<any> = [];
    @Input() public dataUri: string = '';
    @Input() public routeForAdd: string;

    get displayedColumns(): string[] {
        let displayedColumns = [];
        for(let column of this.columns) {
            displayedColumns.push(column.name);
        }
        return displayedColumns;
    }

    public constructor(
        public dataSource: ListadosDataSource<any>,
        public router: Router
    ) {
    }

    ngOnInit() {
        this.dataSource.dataUri = this.dataUri;
        this.dataSource.paginator = this.paginator;
    }

    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
    }

    public submitSearch(): void {
        this.refresh().subscribe(() => {
            // Si no se escribió nada, no está filtrado.
            this.filtered = this.searchText.trim().length>0;
        });
    }

    public clickClearFilter(): void {
        this.searchText = '';
        this.refresh().subscribe(() => {
            this.filtered = false;
        })
    }

    public clickAdd(): void {
        console.log('this.routeForAdd', this.routeForAdd);
        this.router.navigate([this.routeForAdd]);
    }

    protected refresh(): Observable<any> {
        return this.dataSource.refreshData({
            filtros : { nombre: this.searchText },
        });
    }
}
