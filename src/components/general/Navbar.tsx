import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
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
                <Button variant="default">Login</Button>
            </div>
            
            
        </nav>
    );
}