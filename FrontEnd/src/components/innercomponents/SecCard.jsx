import React from 'react'
import FoodCard from './FoodCard'
import images from './asserts'
import Selector from './selector'

const SecCard = ({ref}) => {
  return (
    <div className='bg-[#2E3B32] pt-24 px-24 pb-24 flex flex-col gap-10'>
      <div className="flex justify-between pb-20 px-10 ">
        <div ref={ref} className="flex justify-evenly gap-10">
          <Selector values={{type:"Veg",image:images.vegLogo  }}/>
          <Selector values={{type:"Non-Veg",image:images.nonVeg}}/> 
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
