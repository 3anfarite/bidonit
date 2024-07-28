import { pgTable, serial } from "drizzle-orm/pg-core"


export const bids = pgTable('boi_bids' ,{
   id: serial("id").primaryKey(),
})

