import React, { forwardRef } from "react";
import images from './innercomponents/asserts'
import HotCard from './innercomponents/HotCard'

const HotPhase = forwardRef((props,ref) => {
  return (
    <div ref={ref} className='bg-[#2E3B32] flex flex-col justify-center items-center px-24'>
        <span className='text-white text-4xl font-bold pb-14 '>Hot Stuff</span>
        <hr  className='h-2 rounded-sm w-full'/>
        <div className='flex justify-evenly w-full px-24 pt-14'>
            <HotCard val={{image:images.OfferCard2 , width:25}}/>
            <div className="flex flex-col gap-16">
              <HotCard val={{image:images.OfferCard1,width:25}}/>
              <HotCard val={{image:images.OfferCard3,width:25,height:15}}/>
            </div>
        </div>
    </div>
  )
})

export default HotPhase
