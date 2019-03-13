import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AdminData, apiURL, Comics, JSONResponse} from './config-api';
import {Observable} from 'rxjs';

@Injectable()
export class ComicsService {

    private readonly comicsUrl = '/comics';
    private readonly jsonHttpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private http: HttpClient) { }

    public getAllComics(): Observable<JSONResponse> {
        return <Observable<JSONResponse>>this.http.get(`${apiURL}${this.comicsUrl}`);
    }

    public insertElement(newElement: AdminData): Observable<JSONResponse> {
        return <Observable<JSONResponse>>this.http.post(`${apiURL}${this.comicsUrl}`, newElement, this.jsonHttpOptions);
    }

    public removeElement(element: Comics): Observable<JSONResponse> {
        return <Observable<JSONResponse>>this.http.delete(`${apiURL}${this.comicsUrl}`, {params : { id : element.id }});
    }

    public editElement(editElement: AdminData): Observable<JSONResponse> {
        return <Observable<JSONResponse>>this.http.patch(`${apiURL}${this.comicsUrl}`, editElement, this.jsonHttpOptions);
    }
}
