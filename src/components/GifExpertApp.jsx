import React, { useState } from 'react'
import { AddCategory } from './AddCategory'
import { GifGrid } from './GifGrid'

export const GifExpertApp = () => {

    const [cat, setCat] = useState(["Cars"])


    return (<>
        <h2 className="header-title">GifExpertApp</h2>
        <AddCategory setCat={setCat} cat={cat} />
        <hr />
        <ol>
            {cat.map((cat, i) =>
                <GifGrid key={cat} cat={cat} />
            )}
        </ol>
    </>
    )
}
