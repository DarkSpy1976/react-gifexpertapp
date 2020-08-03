// import React, { useState, useEffect } from 'react'
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGrifItem } from './GifGrifItem';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);

    const {data:images, loading} = useFetchGifs(category);


    // getGifs();

    return (
        <>
        <h3 className="animate__fadeIn">{category}</h3>

        { loading && <p className="animate__flash">Loading</p> }

        <div className="card-grid">
            
            {
                images.map( img => (
                    <GifGrifItem 
                        key={img.id}
                        { ...img }
                    />
                ))
            }
        </div>
        </>
    )
}
