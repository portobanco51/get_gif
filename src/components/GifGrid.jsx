import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ cat }) => {

    const { data: images, loading } = useFetchGifs(cat)

    return (
        <>
            <h3 className='search-value'>{cat}</h3>
            {loading && <p className='loading'>Loading...</p>}
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
