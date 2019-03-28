export const apiURL = 'http://localhost:3000';

export interface JSONResponse {
    status: number;
    error: string;
    response: any;
}

export interface AdminData {
    id: string;
    name: string;
    description: string;
    insertId?: string;
}

export interface Comics {
    id: string;
    name: string;
    genre: string;
    serie: string;
    comments?: string;
    id_auteur: number;
    id_dessinateur: number;
    id_scenariste: number;
    maisonEditionOriginale?: string;
    dateSortieEditionOriginale?: string;
    dateImpressionOriginale?: string;
    dedicaceOriginale?: boolean;
    isbnOriginale?: string;
    maisonEditionReedition?: string;
    dateSortieEditionReedition?: string;
    dateImpressionReedition?: string;
    dedicaceReedition?: boolean;
    isbnReedition?: string;
    nomPret?: string;
    dateDebutPret?: string;
    dateFinPret?: string;
}
