import Link from "next/link";
import Image from "next/image";
import { Button, buttonVariants } from "../ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { auth, signOut } from "@/app/utils/auth";

export async function Navbar() {
    const session = await auth();
    return (
        <nav className="flex items-center justify-between py-5">
            <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Logo fyndWork" width={40} height={40}/>
                <h1 className="text-2xl font-bold">
                    fynd<span className="text-primary">Work</span>
                </h1>
            </Link>

            <div className="flex items-center gap-4">
                <ThemeToggle/>
                {session?.user ? (
                    <form action={async()=>{
                        "use server";
                        await signOut({redirectTo: "/"})
                    }}>
                        <Button>Logout</Button>
                    </form>
                    
                    ): (
                        <Link href="/login" className={buttonVariants({variant: "outline",size:"lg"})}>
                            Login
                        </Link>
                    )}
            </div>
            
            
        </nav>
    );
}