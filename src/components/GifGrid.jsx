import React from 'react'

export const GifGrid = ({ cat }) => {

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
    }

    getGifs()


    return (
        <div>{cat}</div>
    )
}
