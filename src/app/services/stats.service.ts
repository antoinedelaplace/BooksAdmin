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

    public getDetailsStats(statsName: string): Observable<JSONResponse> {
        return <Observable<JSONResponse>>this.http.get(`${apiURL}${this.statsUrl}/${statsName}`);
    }
}
