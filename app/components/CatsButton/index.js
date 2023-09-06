"use client"
"use client"
import { useState } from "react"

export default function CatsButton() {
    const [cats, setCats] = useState(0)
    const addCat = () => {
        setCats(prev => cats + 1)
    }

    return (
        <>
            <h3>{cats}</h3>
            <button onClick={addCat}>Add more cats</button>

        </>
    )
}
