export interface User {
    id: string;
    name: string;
    lastName: string;
    purchase_date: Date;
    expiration_date: Date;
    pass_id: string;
    pass_type: string;
    pass_passes: number;
}