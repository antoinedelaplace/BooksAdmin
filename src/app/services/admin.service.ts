import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {apiURL, JSONResponse} from './config-api';
import {Observable} from 'rxjs';

@Injectable()
export class AdminService {

    private readonly adminUrl = '/admin';

    constructor(private http: HttpClient) { }

    public getAuteursAdmin(): Observable<JSONResponse> {
        return <Observable<JSONResponse>>this.http.get(`${apiURL}${this.adminUrl}/auteurs`);
    }

    public getDessinateursAdmin(): Observable<JSONResponse> {
        return <Observable<JSONResponse>>this.http.get(`${apiURL}${this.adminUrl}/dessinateurs`);
    }

    public getGenresAdmin(): Observable<JSONResponse>  {
        return <Observable<JSONResponse>>this.http.get(`${apiURL}${this.adminUrl}/genres`);
    }

    public getMaisonEditionsAdmin(): Observable<JSONResponse> {
        return <Observable<JSONResponse>>this.http.get(`${apiURL}${this.adminUrl}/maisonEditions`);
    }

    public getScenaristesAdmin(): Observable<JSONResponse> {
        return <Observable<JSONResponse>>this.http.get(`${apiURL}${this.adminUrl}/scenaristes`);
    }

    public getSeriesAdmin(): Observable<JSONResponse> {
        return <Observable<JSONResponse>>this.http.get(`${apiURL}${this.adminUrl}/series`);
    }

}
