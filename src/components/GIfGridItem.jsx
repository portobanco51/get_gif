import React from 'react'

export const GifGridItem = ({ title, url }) => {
    return (
        <div className='grid-card'>
            <img className='grid-img' src={url} alt={title} />
            <h3 className='gif-title' >{title}</h3>
        </div>
    )
}
