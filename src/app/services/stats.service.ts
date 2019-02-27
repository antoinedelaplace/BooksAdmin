import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {apiURL, JSONResponse} from './config-api';
import {Observable} from 'rxjs';

@Injectable()
export class StatsService {

    private readonly statsUrl = '/stats';

    constructor(private http: HttpClient) { }

    public getAllStats(): Observable<JSONResponse> {
        return <Observable<JSONResponse>>this.http.get(`${apiURL}${this.statsUrl}`);
    }

    public getAuteursStats(): Observable<JSONResponse> {
        return <Observable<JSONResponse>>this.http.get(`${apiURL}${this.statsUrl}/auteurs`);
    }

    public getDessinateursStats(): Observable<JSONResponse> {
        return <Observable<JSONResponse>>this.http.get(`${apiURL}${this.statsUrl}/dessinateurs`);
    }

    public getEditionsOriginalesStats(): Observable<JSONResponse> {
        return <Observable<JSONResponse>>this.http.get(`${apiURL}${this.statsUrl}/editionsOriginales`);
    }

    public getGenresStats(): Observable<JSONResponse>  {
        return <Observable<JSONResponse>>this.http.get(`${apiURL}${this.statsUrl}/genres`);
    }

    public getMaisonEditionsStats(): Observable<JSONResponse> {
        return <Observable<JSONResponse>>this.http.get(`${apiURL}${this.statsUrl}/maisonEditions`);
    }

    public getReeditionsStats(): Observable<JSONResponse> {
        return <Observable<JSONResponse>>this.http.get(`${apiURL}${this.statsUrl}/reeditions`);
    }

    public getScenaristesStats(): Observable<JSONResponse> {
        return <Observable<JSONResponse>>this.http.get(`${apiURL}${this.statsUrl}/scenaristes`);
    }

    public getSeriesStats(): Observable<JSONResponse> {
        return <Observable<JSONResponse>>this.http.get(`${apiURL}${this.statsUrl}/series`);
    }

}
