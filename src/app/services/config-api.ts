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
    id_auteur: number;
    id_dessinateur: number;
    id_scenariste: number;
}
