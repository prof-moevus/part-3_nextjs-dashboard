'use client'

import { usePathname } from 'next/navigation';


export default function BooksPage() {

    const pathname = usePathname();


    return (
    <>
        <button>Test2</button>
        <p>Path: {pathname}</p>
    </>
)
}
