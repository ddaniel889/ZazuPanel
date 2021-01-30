import * as qs from 'qs';
import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { QsSerializer } from './qs.serializer';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

    constructor(
        private http: HttpClient,
        private auth: AuthService,
    ) { }

    public login(username: string, password: string): Promise<any> {
        return new Promise((res, rej) => {
            this.post('user/login', {
                username: username,
                password: password,
            }).subscribe((user)=> {
                this.auth.store(user);
                res(user);
            });
        });
    }

    public getApiUrl(): string {
        return environment.serverApiUrl;
    }

    public get(url: string, data?: any): Observable<any> {
        let params = qs.stringify(data);
        if (params.length) {
            params = '?' + params;
        }

        return this.http.get(environment.serverApiUrl + url + params, {
            headers: this.getHeaders(),
        }).pipe(
            map(this.parseResponse),
            catchError(this.handleError<any>())
        );
    }

    public post(url: string, data?:any, files: any[] = []): Observable<any> {
        let body: any;
        let headers = this.getHeaders();

        
        if (files.length > 0) {
            body = new FormData();
            let serializedData = (new QsSerializer).serialize(data);
            for(let item of serializedData) {
                body.append(item.name, item.value);
            }
            for(let file of files) {
                body.append(file.name, file.file);
            }
            //headers = headers.set('Content-Type', undefined);
        } else {
            body = qs.stringify(data);
            headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
        }
        return this.http.post(environment.serverApiUrl + url, body, {
            headers: headers,
        }).pipe(
            map(this.parseResponse),
            catchError(this.handleError<any>())
        );
    }

    public delete(url: string, id: string): Observable<any>  {
        return this.http.delete(environment.serverApiUrl + url + id, {
            headers: this.getHeaders(),
        }).pipe(
            map(this.parseResponse),
            catchError(this.handleError<any>())
            );
        }

    public getId(url: string,id: string): Observable<any> {
            return this.http.get(environment.serverApiUrl + url+ id, {
                headers: this.getHeaders(),
            }).pipe(
                map(this.parseResponse),
                catchError(this.handleError<any>())
                );
          }  
          
    
    public update(url: string, data?:any, files: any[] = []): Observable<any> {
            let body: any;
            let headers = this.getHeaders();        
            if (files.length > 0) {
                body = new FormData();
                let serializedData = (new QsSerializer).serialize(data);
                for(let item of serializedData) {
                    body.append(item.name, item.value);
                }
                for(let file of files) {
                    body.append(file.name, file.file);
                }
                //headers = headers.set('Content-Type', undefined);
            } else {
                body = qs.stringify(data);
                headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
            }
            return this.http.put(environment.serverApiUrl + url, body, {
                headers: headers,
            }).pipe(
                map(this.parseResponse),
                catchError(this.handleError<any>())
            );
        }      

        
    protected getHeaders(): HttpHeaders {
        let headers = new HttpHeaders();
        if (this.auth.isLoggedIn()) {
            let token = this.auth.getToken();
            console.log('VALORRRR DEL TOKEN'+token);
            headers = headers.set('Authorization', `Bearer ${token}`);
        }

        return headers;
    }

    protected parseResponse(r: any): any {
        if (r.success !== true) {
            throw new Error(r.message);
        }
        return r.data;
    }

    private handleError<T>(result?: T) {
        return (error: any): Observable<T> => {
      
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
        
            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
      }
}
