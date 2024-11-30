'use client'

import { usePathname } from 'next/navigation';


export default function TiesPage() {

    const pathname = usePathname();


    return (
    <>
        <button>Test2</button>
        <p>Path: {pathname}</p>
    </>
)
}
