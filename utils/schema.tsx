import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const aioutput=pgTable('aioutput',{
    id:serial('id').primaryKey(),
    formdata:varchar('formdata').notNull(),
    airesponse:text('airesponse').notNull(),
    templateslug:varchar('slug').notNull(),
    createby:varchar('email').notNull(),
    createdat:varchar('createdat').notNull()
})