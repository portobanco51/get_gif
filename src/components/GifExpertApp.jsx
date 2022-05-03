import React, { useState } from 'react'
import { AddCategory } from './AddCategory'

export const GifExpertApp = () => {

    // const categories = ["One Punch", "Samurai X", "Dragon Ball"]

    const [cat, setCat] = useState(["One Punch", "Samurai X", "Dragon Ball"])

    // const handleAdd = () => {
    //     setCat([...cat, "Nuevo Elemento"])
    // }



    return (<>
        <h2 className="header-title">GifExpertApp</h2>
        <AddCategory setCat={setCat} cat={cat} />
        <hr />
        {/* <button onClick={handleAdd}>Add</button> */}
        <ol>
            {cat.map((cat, i) => {
                return <li key={cat}>{cat}</li>
            })}
        </ol>
    </>
    )
}
