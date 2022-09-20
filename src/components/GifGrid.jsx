import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'
import MetaImg from '../assets/media/banner_gif.png';

export const GifGrid = ({ cat }) => {

    const { data: images, loading } = useFetchGifs(cat)

    return (
        <>
            {images.length === 0 ? null : <h3 className='search-value'>Looking gifs for: <span className="span-value">'{cat}'</span></h3>}
            {loading && <p className='loading'>Loading...</p>}
            <div className='card-grid'>
                {
                    images.map((img) => (
                        <GifGridItem key={img.id} {...img} />
                    ))
                }
            </div>
            <img src={MetaImg} alt="metaimg" className='meta-img' />
        </>
    )
}
