import React from 'react'
import { RingLoader } from 'react-spinners'

function ComponentLoader() {
  return (
    <div className="w-full h-full absolute flex items-center justify-center"><RingLoader color="#3A1675" /></div>
  )
}

export default ComponentLoader