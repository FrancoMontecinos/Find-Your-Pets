export interface User {
    id?: number;
    roles_id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    password: string;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
}