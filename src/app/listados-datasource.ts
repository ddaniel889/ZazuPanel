import { DataSource    } from '@angular/cdk/collections';
import { MatPaginator  } from '@angular/material/paginator';
import { MatSort       } from '@angular/material/sort';
import { ClientService } from 'src/app/client.service';
import { Observable, merge, Subject } from 'rxjs';
import { Injectable    } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ListadosDataSource<T> extends DataSource<T> {

    public    data      : Subject<T[]>;
    public    paginator : MatPaginator;
    public    sort      : MatSort;
    public    dataUri   : string;
    protected client    : ClientService;

    constructor(client: ClientService) {
        super();
        this.client = client;
        this.data = new Subject<T[]>();
    }

    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    connect(): Observable<T[]> {
        
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        const dataMutations = [
            this.paginator.page,
            this.sort.sortChange
        ];

        let observable = merge(...dataMutations);
        observable.subscribe(() => {
            this.refreshData();
        });

        this.refreshData();
        return this.data.asObservable();
    }

    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    disconnect() {}

    public refreshData(additionalParams: any = {}): Observable<any> {
        let params: any = {};
        params.limit  = this.paginator.pageSize;
        params.offset = this.paginator.pageIndex * this.paginator.pageSize;
        if (this.sort.active) {
            params.ordenes = {};
            params.ordenes[this.sort.active] = this.sort.direction.toUpperCase();
        }
        
        let observable = this.client.get(this.dataUri, {...params, ...additionalParams});
        observable.subscribe((data) => {
            this.data.next(data.data);
            this.paginator.length = data.total;
        });

        return observable;
    }
}

