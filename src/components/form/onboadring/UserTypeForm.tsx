import { Button } from "@/components/ui/button";
import { Building2, UserRound } from "lucide-react";

type UserSelectionType = "jobSeeker" | "company";

interface UserSelectionTypeProps {
    onSelect: (type: UserSelectionType) => void;
}

export default function UserSelectionType({onSelect}:UserSelectionTypeProps){
    return(
        <div className="space-y-8">
            <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold">Welcome! Let's get started</h2>
                <p className="text-muted-foreground">Choose how you would like to use our platform!</p>
            </div>

            <div className="grid gap-4">
                <Button 
                onClick={() => onSelect("company")}
                variant="outline" className="w-full h-auto p-6 items-center gap-4 border-2 border-border transition-all duration-200 !hover:border-primary hover:bg-primary/5">
                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Building2 className="size-6  text-primary"/> 
                    </div>

                    <div className="text-left">
                        <h3 className="font-semibold ttext-lg">Company/Organization</h3>
                        <p>Post jobs and find exceptional talent</p>
                    </div>
                </Button>

                <Button 
                onClick={() => onSelect("jobSeeker")}
                variant="outline" className="w-full h-auto p-6 items-center gap-4 border-2 border-border transition-all duration-200 !hover:border-primary hover:bg-primary/5">
                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <UserRound className="size-6  text-primary"/> 
                    </div>

                    <div className="text-left">
                        <h3 className="font-semibold ttext-lg">Job Seeaker</h3>
                        <p>Find your dream job oppertunity</p>
                    </div>
                </Button>
            </div>
            
        </div>
    );
}