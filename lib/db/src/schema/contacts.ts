import { pgTable, text, serial, timestamp, pgEnum } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const investorTypeEnum = pgEnum("investor_type", ["private", "hnwi", "fund", "other"]);
export const requestTypeEnum = pgEnum("request_type", ["invest", "presentation", "contact"]);

export const contactsTable = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  investorType: investorTypeEnum("investor_type"),
  investmentVolume: text("investment_volume"),
  message: text("message"),
  requestType: requestTypeEnum("request_type").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactSchema = createInsertSchema(contactsTable).omit({ id: true, createdAt: true });
export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contactsTable.$inferSelect;
