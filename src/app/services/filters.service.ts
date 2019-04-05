import { Injectable } from '@angular/core';

interface ComicsFilters {
    filterGenre: string;
    filterSerie: string;
    filterAuteur: number;
    filterDessinateur: number;
    filterScenariste: number;
}

@Injectable({
    providedIn: 'root',
})
export class FiltersService {
    public comicsFilters: ComicsFilters = {
        filterGenre: undefined,
        filterSerie: undefined,
        filterAuteur: undefined,
        filterDessinateur: undefined,
        filterScenariste: undefined
    };
}
