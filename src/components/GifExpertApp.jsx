import React, { useState } from 'react'
import { AddCategory } from './AddCategory'
import { GifGrid } from './GifGrid'

export const GifExpertApp = () => {

    const [cat, setCat] = useState(["Don't be shy!"])


    return (<>

        <header className='header'>
            <section className='header-title'>
                <h2 className='title'>GifExpertApp</h2>
            </section>
            <AddCategory setCat={setCat} cat={cat} />
        </header>
        <main className='main'>
            <GifGrid key={cat} cat={cat} />
        </main>
    </>
    )
}
