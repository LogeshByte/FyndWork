"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { ReactNode } from "react";

interface GeneralSubmitButtonsProps {
    text:string;
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
    width?: string;
    icon?: ReactNode;
}

export function GeneralSubmitButtons({text,variant,width,icon}:GeneralSubmitButtonsProps){
    const {pending} = useFormStatus();
    return(
        <Button variant={variant} className={width} disabled={pending}>
             {pending ? (
                <>
                <Loader2 className="size-4 animate-spin"/>
                <span>Submitting...</span>
                </> ) :(
                    <>
                    {icon && <span className="mr-2">{icon}</span>}
                    <span>{text}</span>
                    </> 
                )
             }
        </Button>
    )
}