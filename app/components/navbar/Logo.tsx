'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";


const logo = () => {
    const router = useRouter();

    return(
        <Image
        onClick={() => router.push('/')}
        alt="Logo"
        className="hidden md:block cursor-pointer"
        height="100"
        width="180"
        src="/images/logo3.png"


/>
    )
}

export default logo;
