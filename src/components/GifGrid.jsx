import React, { useEffect, useState } from 'react'
import { GIfGridItem } from './GIfGridItem'

export const GifGrid = ({ cat }) => {

    const [images, setImages] = useState([])

    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=ixyF6yDFLPAzBe0fMQHFbbSsbRFzNH55'
        const res = await fetch(url)
        const { data } = await res.json()

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log(gifs)
        setImages(gifs)
    }

    useEffect(() => {
        getGifs()
    }, [])



    return (
        <>

            <h3 className='search-value'>{cat}</h3>
            <div className='card-grid'>
                {
                    images.map((img) => (
                        <GIfGridItem key={img.id}{...img} />
                    ))
                }
            </div>
        </>
    )
}
