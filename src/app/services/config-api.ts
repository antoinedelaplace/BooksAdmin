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
