export const apiURL = 'http://localhost:3000';

export interface JSONResponse {
    status: string;
    error: string;
    response: any;
}

export interface AdminData {
    id: number;
    name: string;
    description: string;
    insertId?: number;
}
