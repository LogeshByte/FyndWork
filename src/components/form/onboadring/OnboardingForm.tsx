"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import UserSelectionType from "./UserTypeForm";
import { CompanyForm } from "./CompanyForm";

type UserSelectionType = "jobSeeker" | "company" | null;

export default function OnboardingForm(){

    const [step,setStep]=useState(1);
    const [userSelection, setUserSelection] = useState<UserSelectionType>(null);

    function handleUserSelection(selection: UserSelectionType) {
        setUserSelection(selection);
        setStep(2);
    }

    function renderStep(){
        switch(step){
            case 1: return <UserSelectionType onSelect={handleUserSelection}/>
            case 2: return userSelection === "company" ? ( <CompanyForm/> ) : (
                <p>User is a jobSeeker</p>
            );

            default: return null;
        }
    }
    
    return(
        <>
            <div className="flex items-center gap-4 mb-10">
                <Image src="/logo.png" alt="logo" width={50} height={50}/>

                <h1 className="text-4xl font-bold">
                    fynd<span className="text-primary">Work</span>
                </h1>
            </div>

            <Card className="w-full max-w-lg">
                <CardContent className="p-6">
                    {renderStep()}
                </CardContent>
            </Card>
        </>
    );
}