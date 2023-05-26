import { IResolvers } from "@graphql-tools/utils";
import { ObjectId } from "mongodb";

import { Database, Listing } from "../../../lib/types";
import { MongoCollection } from "../../../database";

export const listingResolvers: IResolvers = {
  Query: {
    listings: async (
      _root: undefined,
      _args,
      { db }: { db: Database }
    ): Promise<Listing[]> => {
      return await db.listings.find({}).toArray();
    },
  },
  Mutation: {
    createListing:async(_root:undefined,args ,{db} : {db:Database},
    ):Promise< Boolean>=>{
      const { title,  _id ,
        image,
        price,
        } = args.input; 
        console.log(image)
      const res =  await MongoCollection<any>("listing").insertOne({
        title,  _id ,
        image,
        price,
      
      },)
      console.log(res)
      if(res) return true
      else return false
    },
    deleteListing: async (
      _root: undefined,
      { id }: { id: string },
      { db }: { db: Database }
    ): Promise<Listing> => {
      const deleteRes = await db.listings.findOneAndDelete({
        _id: new ObjectId(id),
      });

      if (!deleteRes.value) {
        throw new Error("failed to delete listing!!!");
      }

      return deleteRes.value;
    },
  },

  Listing: {
    id: (listing: Listing): string => listing._id.toString(),
  },
};
