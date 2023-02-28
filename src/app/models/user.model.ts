export interface UserModel {
    id:number;
    username: string;
    email: string;
    token: string;
    registerDate: Date;
    lastActive: Date;
    runs: number[];
    classes: number[];
}