import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ cat }) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        getGifs(cat)
            .then(setImages)
    }, [cat])

    return (
        <>
            <h3 className='search-value'>{cat}</h3>
            <div className='card-grid'>
                {
                    images.map((img) => (
                        <GifGridItem key={img.id} {...img} />
                    ))
                }
            </div>
        </>
    )
}
