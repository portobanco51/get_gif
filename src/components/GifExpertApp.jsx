import React, { useState } from 'react'
import { AddCategory } from './AddCategory'
import { GifGrid } from './GifGrid'

export const GifExpertApp = () => {

    const [cat, setCat] = useState([''])

    return (<>
        <header className='header'>
            <section className='header-title'>
                <h2 className='title'>Get<span className="span-header">_</span>Gif</h2>
                <h3 className='subtitle span-header'>Search and download quickly gifs from GIPHY!</h3>
            </section>
            <AddCategory setCat={setCat} cat={cat} />
        </header>
        <main>
            <GifGrid key={cat} cat={cat} />
        </main>
    </>
    )
}
