import OnboardingForm from "@/components/form/onboadring/OnboardingForm";
import { prisma } from "../utils/db";
import { redirect } from "next/navigation";
import { requireUser } from "../utils/requireUser";

async function checkIfUserHasFinishedOnboarding(userId: string) {
    const user = await prisma.user.findUnique({
        where: {
            id: userId
        },
        select: {
            onboadringCompleted: true,
        },
    });
    if(user?.onboadringCompleted === true){
        return redirect("/");
    }
    return user;
}

export default async function OnboardingPage() {
    const session = await requireUser();
    await checkIfUserHasFinishedOnboarding(session.id as string);
    return(
        <div className="flex flex-col items-center justify-center min-h-screen w-screen">
            <OnboardingForm/>
        </div>
    );
}