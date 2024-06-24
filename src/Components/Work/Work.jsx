import React from 'react'
import Wsection1 from './Section-1/Wsection1'
import Section2 from '../Home/Section-2/Section2'
import '../Home/Home.css'
import './Work.css'
import Products from './Section-2/Products'
import Lazyloader from '../Lazyloader/Lazyloader'
import Section3 from './Section-3/Section3'

function Work() {
  return (
    <>
    <Lazyloader name={'work'}/>
    <Wsection1 />

    {/* Imported marquee from Home */}
    <Section2 /> 
    <Products />    
    
    <Section3 /> 
    </>
  )
}

export default Work