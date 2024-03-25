import Link from "next/link";
import Image from 'next/image';
import { Button } from "./ui/button";


export default async function Navbar(){
    return(
        <nav className="flex justify-between items-center p-16">
            <div className="flex justify-between items-center gap-4">
                    <Link href="/">
                         <Image src="/SIREGERD.png" width={80} height={80} alt="Next.js Logo"></Image>
                    </Link>
                    <div className="flex max-lg:hidden flex-col items-center gap-6">
                             <Button variant={"ghost"}>
                                <Link href="/entradas">Entradas</Link>
                   |         </Button>
                    </div>
            </div>
        </nav>
    )
}