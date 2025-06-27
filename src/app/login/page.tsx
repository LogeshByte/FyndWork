import { LoginForm } from "@/components/form/LoginForm";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
   <div className="min-h-screen w-screen flex items-center justify-center ">
      <div className="flex w-full max-w-sm flex-col gap-6 ">
        <Link href="/" className="flex items-center self-center gap-2 ">
        <Image src="/logo.png" alt="logo" width={40} height={40}/>
          <h1 className="text-2xl font-bold">
            fynd<span className="text-primary">Work</span>
          </h1>
        </Link>

        <LoginForm/>

      </div>
   </div>
  );
}
 