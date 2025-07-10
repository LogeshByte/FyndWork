"use server";

import z from "zod";
import { requireUser } from "./utils/requireUser";
import { companySchema } from "./utils/zodSchemas";
import { prisma } from "./utils/db";
import { redirect } from "next/navigation"; // Uncomment this line if using Next.js 13+ with app directory

export async function createCompany(data:z.infer<typeof companySchema>){
    const session = await requireUser();

    const validatedData = companySchema.parse(data);

    await prisma.user.update({
        where: { id: session.id },
        data: {
            onboadringCompleted:true,
            userType: "COMPANY",
            Company: {
                create:{
                    
                    ...validatedData
                }
            }
        }
    });
    return redirect("/");
}