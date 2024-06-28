import React from 'react'
import './Lazyloader.css'
import './n.scss'
import { RingLoader } from 'react-spinners'

function LazyloaderSus({name}) {
  return (
    <div className='loader-container'>
            <div className='portfolio-experiment'>
                <div className="experiment-title">{name}</div>
            </div>
            <RingLoader color="#3A1675" />
        </div>
  )
}

export default LazyloaderSus