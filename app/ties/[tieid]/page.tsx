'use client'

import { usePathname } from "next/navigation"

export default async function TiePage() 
    {
        const pathName = usePathname()
    //const bookID = usePathname
    const tieID = pathName.split("/").pop();

    return (
    <>
        <h3>Cravate {tieID}</h3>
        <p>Path: {pathName}</p>
    </>
)
}
