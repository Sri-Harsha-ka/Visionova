import React from 'react'
import FoodCard from './FoodCard'
import images from './asserts'
import Selector from './selector'

const SecCard = ({ref}) => {
  return (
    <div className='bg-[#2E3B32] px-24 pb-24 flex flex-col gap-10'>
      <div className="flex justify-between px-10 ">
        <div ref={ref} className="flex justify-evenly " >
          <img src={images.vegLogo2}  className='w-96 cursor-pointer' alt="" /> 
          <img src={images.nonVeg2}  className='w-96 cursor-pointer' alt="" /> 
          <img src={images.egg}  className='w-96 cursor-pointer' alt="" /> 
          
        </div>
        <div>
          {/* <span >Filter</span> */}
        </div>
      </div>
      <div className="flex justify-evenly">
        <FoodCard food={{ name: "Samosa", image: images.samosa, cal: 45, prize: 20 }} />
        <FoodCard food={{ name: "Biriyani", image: images.biriyani, cal: 45, prize: 120 }} />
        <FoodCard food={{ name: "Chapari", image: images.chips, cal: 45, prize: 20 }} />
        <FoodCard food={{ name: "Sandwitch", image: images.sandwitch, cal: 109, prize: 68 }} />
      </div>
      <div className="flex justify-evenly">
        <FoodCard food={{ name: "Samosa", image: images.samosa, cal: 45, prize: 20 }} />
        <FoodCard food={{ name: "Biriyani", image: images.biriyani, cal: 45, prize: 120 }} />
        <FoodCard food={{ name: "Chapari", image: images.chips, cal: 45, prize: 20 }} />
        <FoodCard food={{ name: "Sandwitch", image: images.sandwitch, cal: 109, prize: 68 }} />
      </div>
    </div>
  )
}

export default SecCard
