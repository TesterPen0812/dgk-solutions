import { sql } from "drizzle-orm";
import { pgTable, text, varchar, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const bookings = pgTable("bookings", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  fullName: text("full_name").notNull(),
  phone: text("phone").notNull(),
  email: text("email"),
  postcode: text("postcode").notNull(),
  address: text("address"),
  serviceNeeded: text("service_needed").notNull(),
  isEmergency: boolean("is_emergency").default(false),
  preferredDate: text("preferred_date"),
  preferredTime: text("preferred_time"),
  description: text("description").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertBookingSchema = createInsertSchema(bookings).omit({
  id: true,
  createdAt: true,
}).extend({
  fullName: z.string().min(2, "Full name is required"),
  phone: z.string().min(10, "Valid phone number required"),
  email: z.string().email().optional().or(z.literal("")),
  postcode: z.string().min(5, "Valid postcode required"),
  address: z.string().optional(),
  serviceNeeded: z.string().min(1, "Please select a service"),
  isEmergency: z.boolean().optional(),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  description: z.string().min(10, "Please describe your issue"),
});

export type InsertBooking = z.infer<typeof insertBookingSchema>;
export type Booking = typeof bookings.$inferSelect;

export const services = [
  { id: "emergency-plumbing", name: "Emergency Plumbing", category: "emergency" },
  { id: "burst-pipes", name: "Leaking/Burst Pipes", category: "emergency" },
  { id: "drain-clearing", name: "Drain Clearing & Inspection", category: "drainage" },
  { id: "sink-unblocking", name: "Sink Unblocking", category: "drainage" },
  { id: "toilet-unblocking", name: "Toilet Unblocking", category: "drainage" },
  { id: "bath-unblocking", name: "Bath Unblocking", category: "drainage" },
  { id: "cctv-surveys", name: "CCTV Drain Surveys", category: "drainage" },
  { id: "hpwj-jetting", name: "HPWJ Jetting", category: "drainage" },
  { id: "no-dig-repairs", name: "No-Dig Drain Repairs", category: "repairs" },
  { id: "drain-lining", name: "Drain Lining", category: "repairs" },
  { id: "patch-repairs", name: "Patch Repairs", category: "repairs" },
  { id: "excavations", name: "Traditional Excavations", category: "repairs" },
  { id: "tanker-services", name: "Tanker Services", category: "tanker" },
  { id: "septic-tank", name: "Septic Tank Emptying", category: "tanker" },
  { id: "grease-trap", name: "Grease Trap Maintenance", category: "tanker" },
] as const;

export const certifications = [
  "HPWJ Jetting Certs",
  "NVQ Level 3 Plumbing",
  "PASMA",
  "IPAF",
  "SSSTS",
  "STREETWORKS (NRSWA)",
] as const;

export const sectors = [
  "Homeowners",
  "Managing Agents",
  "Businesses",
  "Restaurants",
  "Schools",
  "Universities",
  "Retail Outlets",
  "Offices",
  "Hospitals",
  "Houses",
  "Management Properties",
  "Apartment Buildings",
  "Gyms",
] as const;

export const serviceAreas = [
  { name: "Essex", description: "Our home base - fast response times" },
  { name: "M25 Radius", description: "Full coverage within the M25" },
  { name: "Cambridge", description: "Extended coverage area" },
  { name: "Luton", description: "Extended coverage area" },
] as const;
