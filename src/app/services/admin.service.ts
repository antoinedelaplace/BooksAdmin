import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AdminData, apiURL, JSONResponse} from './config-api';
import {Observable} from 'rxjs';

@Injectable()
export class AdminService {

    private readonly adminUrl = '/admin';
    private readonly jsonHttpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private http: HttpClient) { }

    public getElements(componentName: string): Observable<JSONResponse> {
        return <Observable<JSONResponse>>this.http.get(`${apiURL}${this.adminUrl}/${componentName}`);
    }

    public insertElement(componentName: string, newElement: AdminData): Observable<AdminData> {
        return this.http.post<AdminData>(`${apiURL}${this.adminUrl}/${componentName}`, newElement, this.jsonHttpOptions);
    }

}
