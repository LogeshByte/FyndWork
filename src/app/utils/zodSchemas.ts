 import { z } from 'zod';
 
 export const companySchema = z.object({
    name: z.string().min(2, "Company name must be at least 2 characters"),
    location: z.string().min(1 , "Location is required"),
    about: z.string().min(10, "About section must be at least 10 characters"), 
    logo:z.string().min(1, "Logo URL is required"),
    website: z.string().url("Invalid URL format"),
    xAccount: z.string().optional(),
 });

 export const jobSeekerSchema = z.object({
   name: z.string().min(2, "Name must be at least 2 characters"),
   about: z.string().min(10, "About section must be at least 10 characters"),
   resume: z.string().min(1, "Please upload your resume"),
 })