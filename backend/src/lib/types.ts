import { Collection, ObjectId } from "mongodb";

export interface Listing {
    _id: ObjectId;
    title: string;
    image: string;
    price: number;
}
export type Listings {
 
    _id: ObjectId;
    title: string;
    image: string;
    price: number;
}

export interface Database {
    listings: Collection<Listing>;
}

 
