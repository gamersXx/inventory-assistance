export interface TokenPayload {
    id: string;
    ip?: string;
    email: string;
    roles: string[];
    exp: number;
}