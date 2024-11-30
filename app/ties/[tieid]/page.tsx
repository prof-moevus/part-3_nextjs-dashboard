'use client'

import { usePathname } from "next/navigation"
import { useParams } from 'next/navigation';

/**
 * 
 * You should use `useParams` to extract params on a s
 * client side component
 */
export default function TiePage() {
    const pathName = usePathname()
    const params = useParams();
    const { tieid } = params;

    // Altnerative old and brutal way to useParams
    // const tieID = pathName.split("/").pop();

    return (
        <div>
            <h3>Cravate {tieid}</h3>
            <p>Path: {pathName}</p>
        </div>
    )
}
