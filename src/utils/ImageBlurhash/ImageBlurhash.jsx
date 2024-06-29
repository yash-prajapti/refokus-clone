import React, { useEffect, useState } from 'react'
import './ImageBlurhash.css';

export default function ImageBlurhash({ src, alt, srcSmall }) {
    const [imageLoaded, setImageLoaded] = useState(true);

    useEffect(() => {
        const img = new Image()
        img.onload = () => {
            setImageLoaded(true)
        }
        img.onerror = () => {
            setImageLoaded(false)
        }
        img.src = src
    }, [])
    return (
        <>
            {!imageLoaded ?
                (<div className='blur-image w-full h-full'><img src={srcSmall} alt={alt} loading='lazy' className=' w-full h-full object-cover object-center' /></div>) 
                : (<img src={src} alt={alt} loading='lazy' className='w-full h-full object-cover object-center' />)}
        </>
    )
}
