import React from 'react'
import LeftBanner from './LeftBanner'
import RightBanner from './RightBanner'



const Banner = () => {
  
  return (
    <section id="home" className='w-full pt-10 pb-10 flex flex-col mdl:flex-row  mdl:gap-7 lg:gap-6 xl:gap-0 items-center font-titleFont border-b-[2px] border-b-black/50'>
        <LeftBanner/>
        <RightBanner/>
    </section>
  )
}

export default Banner