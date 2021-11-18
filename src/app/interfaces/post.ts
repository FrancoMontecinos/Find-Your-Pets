import {Pet} from "./pet";

export interface Post {
    id: number;
    user_id: number;
    pet : Pet;
    types_id: number;
    communes_id: number;
    title: string;
    description: string;
    address:string;
    latitude:string;
    longitude:string;
    status:boolean;
}